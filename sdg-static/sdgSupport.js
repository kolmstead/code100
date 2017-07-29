let orderList = {};
let sortedScores = [];

function showTopFive () {

  function getScores () {

    let sdgAllProps = JSON.parse(localStorage.getItem('focusAreasJSON'));
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
  `<ul>
    <li>${sortedScores[0][0]} score is ${sortedScores[0][1]}</li>
    <li>${sortedScores[1][0]} score is ${sortedScores[1][1]}</li>
    <li>${sortedScores[2][0]} score is ${sortedScores[2][1]}</li>
    <li>${sortedScores[3][0]} score is ${sortedScores[3][1]}</li>
    <li>${sortedScores[4][0]} score is ${sortedScores[4][1]}</li>  
  </ul>`;
return sortedScores;
}
