let orderList = {};
let sortedScores = [];

function showTopFive () {

let sdgAllProps = JSON.parse(localStorage.getItem('focusAreasJSON'));

  function getScores () {
    
    let scoreProp = Object.keys(sdgAllProps);

      for ( i=0; i<scoreProp.length; i++) {
        orderList[sdgAllProps[scoreProp[i]].slug] = sdgAllProps[scoreProp[i]].score;
      } return orderList;
  }

  function  sortScores() {
    sortedScores = Object.entries(orderList);
    sortedScores.sort((x,y) => y[1] - x[1]);
    return sortedScores;
  }

getScores();
sortScores();
document.getElementById('top5').innerHTML = 
  `
  <img src=${sdgAllProps[sortedScores[0][0]].image} width="70">
  <img src=${sdgAllProps[sortedScores[1][0]].image} width="70">
  <img src=${sdgAllProps[sortedScores[2][0]].image} width="70">
  <img src=${sdgAllProps[sortedScores[3][0]].image} width="70">
  <img src=${sdgAllProps[sortedScores[4][0]].image} width="70">
  <ul>
    <li><img src=${sdgAllProps[sortedScores[0][0]].image} width="70">${sortedScores[0][0]} score is ${sortedScores[0][1]}</li>
    <li><img src=${sdgAllProps[sortedScores[1][0]].image} width="70">${sortedScores[1][0]} score is ${sortedScores[1][1]}</li>
    <li><img src=${sdgAllProps[sortedScores[2][0]].image} width="70">${sortedScores[2][0]} score is ${sortedScores[2][1]}</li>
    <li><img src=${sdgAllProps[sortedScores[3][0]].image} width="70">${sortedScores[3][0]} score is ${sortedScores[3][1]}</li>
    <li><img src=${sdgAllProps[sortedScores[4][0]].image} width="70">${sortedScores[4][0]} score is ${sortedScores[4][1]}</li>  
  </ul>`;
return sortedScores;
}
