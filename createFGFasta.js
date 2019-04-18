const fs = require('fs');
const fetch = require('node-fetch');

initialize();

function initialize() {
  createDB()
  .then(res => {
    console.log('complete');
  });
}

async function createDB() {
  try {
    let parts = await getParts();
    let fasta = await partsToFasta(parts);
    fs.writeFileSync('result.fa', fasta);
  } catch (error) {
    throw error;
  }
}

async function partsToFasta(partsArray) {
  try {  
    let result = "";
    for(let i = 0; i < partsArray.length; i++){
      let part = partsArray[i];
      if (part.gene_id && part.synthesized_sequence) {
        result += `>${part.gene_id}\n${part.synthesized_sequence}\n`;
      }  
    }
    return result;
  } catch (error) {
    throw error;
  }  
}

async function getParts() {
  try {  
    let response = await fetch(`http://api.freegenes.org/parts`);
    let result = response.json();
    return result;
  } catch (error) {
    throw error;
  }
}