# Blast Wrapper
A node application used to add FreeGenes related functions to a local blast server with sequenceserver UI.

## Install
From the terminal:
```bash
git clone https://github.com/matthewstewart/blast-wrapper && cd blast-wrapper && npm install
```

## Scripts

### Get Fasta File From FreeGenes API Data
Makes an API call to `http://api.freegenes.org/parts`, retrieves an array of part records, writes those records to `./result.fa`:
```bash
npm run fg:fasta
```