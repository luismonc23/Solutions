//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//Your function receives one side of the DNA you need to return the other complementary side
//  . DNA strand is never empty or there is no DNA at all.

function DNAStrand(dna){
  debugger;
  let chars = dna.split('');
  
  let newChars = chars.map(function(a){
    return a == "A" ? "T" : (a == "T" ? "A" : (a == "G" ? "C" : "G")); //Validation a bit complex, could be replaced with an array or object with key A, G, C and T
    // { "A" : "T",
    //   "T": "A",
    //   "G": "C",
    //   "C": "G" }
  });
  return newChars.join('');
}
