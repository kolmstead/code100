//promise based showTopFive()
function showTopFive () {
  getStuff('focusAreasJSON')
    .then(getScores)
    .then(sortScores)
    .then(renderScores)
    .catch(()=>console.log('there was an error!'))
}

function getStuff(id) {
  return Promise.resolve()
    .then(()=>JSON.parse(localStorage.getItem(id)));
}

function getScores (props) {
  let allProps = props;
  let scores = Object.keys(props);
  let onlyScores = {};
    for (i=0; i<scores.length; i++) {
      onlyScores[props[scores[i]].slug] = props[scores[i]].score;
    } 
    // return Promise.resolve([onlyScores, allProps]);
    return ([onlyScores, allProps]);
}

function sortScores ([onlyScores, allProps]) {
    let mySortedScores = Object.entries(onlyScores)
      .sort((x,y) => y[1] - x[1]);
    return ([allProps, mySortedScores]);
}

//break into two function - how do I get my id pass all the way through? or maybe it gets assigned in first function...
function renderScores ([props, scores]) {
  document.getElementById('top5').innerHTML =  //for id='top5'
    `
    <img src=${props[scores[0][0]].image} width="70">
    <img src=${props[scores[1][0]].image} width="70">
    <img src=${props[scores[2][0]].image} width="70">
    <img src=${props[scores[3][0]].image} width="70">
    <img src=${props[scores[4][0]].image} width="70">
    <ul>
      <li>${scores[0][0]} Pscore is ${scores[0][1]}</li>
      <li>${scores[1][0]} Pscore is ${scores[1][1]}</li>
      <li>${scores[2][0]} Pscore is ${scores[2][1]}</li>
      <li>${scores[3][0]} Pscore is ${scores[3][1]}</li>
      <li>${scores[4][0]} Pscore is ${scores[4][1]}</li>  
    </ul>`;
}

// function to reset all scores and considerLater list in localStorage
function resetAll() {

  considerLater = [];
  save('considerLater', considerLater);
  localStorage.removeItem('focusAreasJSON');
  save('focusAreasJSON', focusAreas); //saves reset focusAreas, with 0 scores, to localStorage
  
  showTopFive();
  showConsiderLaterList('considerLater');
  
  console.log("scores, matches and considerLater list all reset");
}


// the Promise based replacement for showConsiderLaterList/ uses async get3() or get2() then showList() as final
function showConsiderLaterList(id) {
  getStuff(id)
    .then(showList);
}

function showList(considerLaterList) {
  document.getElementById('later').innerHTML = `<p>ConsiderLaterList: ${considerLaterList}</p>`;
}

function saveStuff(id, doc) {
  return Promise.resolve()
    .then( () => localStorage.setItem(id, JSON.stringify(doc)));
}

// promise based function to turn unObjects.js focusAreas into JSON

function convertToJSONAndSave (id, doc) { // save is already save and convert to JSON - I think this f(x) isn't needed
  saveStuff(id, doc);
}

function checkMake (id, doc) {
  if (!get(id)) { saveStuff(id, doc) } else {console.log("it exists")};
}