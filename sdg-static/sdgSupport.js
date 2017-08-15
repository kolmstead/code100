let orderList = {};
let sortedScores = [];
let considerLaterList = [];


// to refactor showTopFive as promises
// 1. getProps 2. getScores from Props 3. sortScores 4. renderScores
function showTopFive () {

let sdgAllProps = get('focusAreasJSON');

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


//new showTopFive() to work modular async code
function showTopFiveB() {
  getStuff('focusAreasJSON')
    .then(getScoresB)
    .then(sortScoresB)
    .then(renderScores)
    .catch(()=>console.log('there was an error!'));
}

function getStuff(id) {
  return Promise.resolve()
    .then(()=>JSON.parse(localStorage.getItem(id)));
}

function getScoresB (props) {
  return new Promise(function(resolve){
    let scores = Object.keys(props);
      for ( i=0; i<scores.length; i++) {
        onlyScores[props[scores[i]].slug] = props[scores[i]].score;
      } resolve(onlyScores);
    });  
}

function getScoresC (props) {
  let allProps = props;
  let scores = Object.keys(props);
  let onlyScores = {};
    for (i=0; i<scores.length; i++) {
      onlyScores[props[scores[i]].slug] = props[scores[i]].score;
    } 
    return Promise.resolve([onlyScores, allProps]);
}

function  sortScoresB (orderList) {
  return Promise.resolve()
  .then(function(){
    sortedScores = Object.entries(orderList);
    sortedScores.sort((x,y) => y[1] - x[1]);
    return sortedScores;
  });  
}

function sortScoresC ([allProps, onlyScores]) {
    let allProps = allProps;
    let bigX = 333;
    let bigY = 444;
    bigY = bigX + bigY;
    let mySortedScores = [];
    mySortedScores = Object.entries(onlyScores);
    mySortedScores.sort((x,y) => y[1] - x[1]);
    console.log("sorted:", mySortedScores)
    return Promise.resolve([allProps, mySortedScores])
}

// two functions separate createMarkup and renderScores

function renderScores(x) {
  console.log("Did I get really get x?", x);
}

function showTopFiveC () {
  getStuff('focusAreasJSON')
    .then(getScoresC)
    .then(sortScoresC)
    .then(renderScores)
    .catch(()=>console.log('there was an error!'))
}

function step1(){
  let server = "myserver.com";
  let data = "so much data, very impresive";
  return Promise.resolve([server, data]);
}

function step2([server, data]){
  console.log(server); // print "myserver.com"
  console.log(data);   // print "so much data, very impresive"
  return Promise.resolve("done");
}

function allSteps() {
  step1()
    .then(step2)
    .then((msg)=>{
      console.log(msg); // print "done"
  })
}

// function renderScores (id, props, scores) {
//   document.getElementById(id).innerHTML =  //for id='top5'
//     `
//     <img src=${props[scores[0][0]].image} width="70">
//     <img src=${props[scores[1][0]].image} width="70">
//     <img src=${props[scores[2][0]].image} width="70">
//     <img src=${props[scores[3][0]].image} width="70">
//     <img src=${props[scores[4][0]].image} width="70">
//     <ul>
//       <li>${scores[0][0]} Pscore is ${scores[0][1]}</li>
//       <li>${scores[1][0]} Pscore is ${scores[1][1]}</li>
//       <li>${scores[2][0]} Pscore is ${scores[2][1]}</li>
//       <li>${scores[3][0]} Pscore is ${scores[3][1]}</li>
//       <li>${scores[4][0]} Pscore is ${scores[4][1]}</li>  
//     </ul>`;
// }


//not sure why I made this; don't know if I still need it
var myProps;

function makeMyProps () {
  myProps = get('focusAreasJSON');
  return myProps;
};



// function to reset all scores and considerLater list in localStorage
function resetAll() {

  considerLater = [];
  save('considerLater', considerLater);
  localStorage.removeItem('focusAreasJSON');
  save('focusAreasJSON', focusAreas); //saves reset focusAreas, with 0 scores, to localStorage
  
  showTopFive();
  // showConsiderLaterList();
  doIt('considerLater');
  
  console.log("scores, matches and considerLater list all reset");
}


// original showConsiderLaterList() is not async; see below for async version using promises
function showConsiderLaterList() {
  considerLaterList = get('considerLater');
  document.getElementById('later').innerHTML = `<p>ConsiderLaterList: ${considerLaterList}</p>`;
}


// the Promise based replacement for showConsiderLaterList/ uses async get3() or get2() then showList() as final
function doIt(id) {
  get3(id)
    .then(showList);
}

function showList(bob) {
  document.getElementById('later').innerHTML = `<p>Promised LaterList: ${bob}</p>`;
}