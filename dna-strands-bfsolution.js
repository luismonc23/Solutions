function DNAStrand(dna){
  debugger;
  let chars = dna.split('');
  
  let newChars = chars.map(function(a){
    return a == "A" ? "T" : (a == "T" ? "A" : (a == "G" ? "C" : "G"));
  });
  return newChars.join('');
}
