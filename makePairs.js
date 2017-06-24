// works with storage.html
// next steps are using the returned match to dipslay the images
// need to build the rest of the objects
// then use the match array references to try to get the image location and display the images
//THEN work on scoring the match and other sorting stuff



var pairArray = (arr) => {
  const myPairs = arr.reduce(
    (pairs, item, i, orig) => i > 0 
        // when not the first item, pair it
        // with the first item
        ? pairs.concat([[orig[0], item]])
        // when first item, just return pairs
        : pairs,
    []
  );
  
  return arr.length>2
      // when array contains at least 3 item
      // recurse with subset of array
      // (second item until end)
      ? myPairs.concat(pairArray(arr.slice(1)))
      // otherwise, we've visited them all
      : myPairs;
}

var unSet = ["un1", "un2", "un3", "un4", "un5", "un6","un7","un8","un9","un10","un11","un12","un13","un14","un15","un16","un17"];

var unPairsArray = [];
// pairArray( makePairs )
//     .forEach((pair)=>console.log(pair))

pairArray( unSet )
.forEach((pair)=>{
  unPairsArray.push(pair);
});


function test1 (x) {
console.log(unPairsArray[x]);
}

function tryThis () {
  test1(37);
}

function tryMe () {
  console.log(unPairsArray[12]);
}