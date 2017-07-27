(function showTopFive () {
  let bob = JSON.parse(localStorage.getItem('focusAreasJSON'));
  console.log(bob);
  console.log(Object.keys(bob).length);
  console.log(`Score is ${bob['un7'].score} for ${bob['un7'].slug}: the SDG about ${bob['un7'].label}\. `);
    // let orderList = [];
    // orderList.push = bob[i][i].slug;
    // orderList.push = bob[i][i].score;
    // console.log("this is slug", bob[i][i].slug);
  let joe = `Score is ${bob['un7'].score} for ${bob['un7'].slug}: the SDG about ${bob['un7'].label}\. `
  document.getElementById('top5').innerHTML = `<h2>${joe}</h2>`;
})();