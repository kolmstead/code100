let orderList = {};

(function showTopFive () {
  let bob = JSON.parse(localStorage.getItem('focusAreasJSON'));
  let icy = Object.keys(bob);
  console.log(bob);
  console.log(Object.keys(bob).length);
  console.log(`Score is ${bob[icy[3]].score} for ${bob[icy[3]].slug}: the SDG about ${bob[icy[3]].label}\. `);
    // let orderList = {};
    for ( i=0; i<icy.length; i++) {
      orderList[bob[icy[i]].slug] = bob[icy[i]].score;
      // orderList.push(bob[icy[i]].slug);
      // orderList.push(bob[icy[i]].score);
      // console.log(orderList);
    } return orderList;
  // let joe = `Score is ${bob[icy[3]].score} for ${bob[icy[3]].slug}: the SDG about ${bob[icy[3]].label}\. `
  let joe = "once upon a time in Greenland";
  document.getElementById('top5').innerHTML = `<h2>Anything?: ${joe}</h2>`;
})();

console.log(orderList);

// var jsonObj = {};
// for(var i=0; i<data.length; i++){
//     jsonObj[data[i].id] = data[i].name;
// }