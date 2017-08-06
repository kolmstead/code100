let orderList = {};
let sortedScores = [];
let considerLaterList = [];

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
      <li>${sortedScores[0][0]} score is ${sortedScores[0][1]}</li>
      <li>${sortedScores[1][0]} score is ${sortedScores[1][1]}</li>
      <li>${sortedScores[2][0]} score is ${sortedScores[2][1]}</li>
      <li>${sortedScores[3][0]} score is ${sortedScores[3][1]}</li>
      <li>${sortedScores[4][0]} score is ${sortedScores[4][1]}</li>  
    </ul>`;
  return sortedScores;
}

// function to reset all scores and considerLater list in localStorage
function resetAll() {
  // localStorage.removeItem('focusAreasJSON');
  considerLater = [];
  localStorage.setItem('considerLater', JSON.stringify(considerLater));
  localStorage.removeItem('focusAreasJSON');
  let focusAreasJSON = JSON.stringify(focusAreas);
  localStorage.setItem('focusAreasJSON', focusAreasJSON);
  showTopFive();
  showConsiderLaterList();
  console.log("scores, matches and considerLater list all reset");
}

function showConsiderLaterList() {
  considerLaterList = JSON.parse(localStorage.getItem('considerLater'));
  document.getElementById('later').innerHTML = `<p>ConsiderLaterList: ${considerLaterList}</p>`;
}

