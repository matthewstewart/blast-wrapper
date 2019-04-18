const fs = require('fs');
const fetch = require('node-fetch');

initialize();

function initialize() {
  createFasta()
  .then(res => {
    if (res.success) {
      console.log(`success ${res.partsCount} parts written to result.fa`);
    } else {
      console.log('A problem occured and 0 parts were written to result.fa');
    }  
  });
}

async function createFasta() {
  try {
    let parts = await getParts();
    let fasta = await partsToFasta(parts);
    fs.writeFileSync('result.fa', fasta);
    return {
      success: true,
      partsCount: parts.length
    }
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