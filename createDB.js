const { spawn } = require('child_process');

const cwd = process.cwd();
const dbDir = `${cwd}/../blastdb`;

//const move = spawn('mv', [`${cwd}/result.fa`, `${cwd}/../blastdb/result.fa`]);
const move = spawn(`mv ${cwd}/result.fa ${cwd}/../blastdb/result.fa`, {
  stdio: 'inherit',
  shell: true
});

const build = spawn(`cd ${dbDir} && makeblastdb -dbtype nucl -title FreeGenes -in ${dbDir}/result.fa -parse_seqids`, {
  stdio: 'inherit',
  shell: true
});


// process.stdin.pipe(move.stdin);

// move.stdout.on('data', (data) => {
//   console.log(`${data}`);
// });
// move.stderr.on('data', (data) => {
//   console.log(`${data}`);
// });
// move.on('close', () => {
  
// });
