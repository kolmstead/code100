

// document.getElementById('toggleChiasmus').addEventListener('click', toggleChiasmus, false);



// function myFunction() {
//                 var change = document.getElementById("toggle");
//                 if (change.innerHTML == "on")
//                 {
//                     change.innerHTML = "off";
//                 }
//                 else {
//                     change.innerHTML = "on";
//                 }
//             }


function showChiasmus(){
  document.getElementById('joe').innerHTML=`${isaiah}`;
}

function hideChiasmus() {
  document.getElementById('joe').innerHTML=`${fastSunday}`;
}


// got changeButton to work inside of toggleChiasmus; could it be outside?
function toggleChiasmus () {
  const buttonState = document.getElementById("toggleChiasmus").innerHTML;
  
  function changeButtonText () {
    var checkButton = document.getElementById("toggleChiasmus");
    if (checkButton.innerHTML == "Show") {
      checkButton.innerHTML = "Hide";
    } else {
      checkButton.innerHTML = "Show";
    }
  }
  
  
  
  
  switch (buttonState) {
    case 'Show':
      showChiasmus();
      changeButtonText();
      break;
    case 'Hide':
      hideChiasmus();
      changeButtonText();
      break;
  }
  
}


const isaiah = `
<div>
<p id='ch'>Inside</p>
<p id='ch'>&nbsp starvation</p>
<p id='ch'>&nbsp &nbsp are</p>
<p id='ch'>&nbsp &nbsp &nbsp individual</p>
<p id='ch'>&nbsp &nbsp &nbsp &nbsp attitudes.</p>
<p id='ch'>&nbsp &nbsp &nbsp &nbsp &nbsp Hypocritical</p>
<p id='ch'>&nbsp &nbsp &nbsp &nbsp attitudes.</p>
<p id='ch'>&nbsp &nbsp &nbsp Individuals</p>
<p id='ch'>&nbsp &nbsp are</p>
<p id='ch'>&nbsp starving</p>
<p id='ch'>inside.</p> 
</div> `;

const fastSunday = `
<div>
  <p id='joe'>
    Inside starvation are individual attitudes.<br>
    Hypocritical attitudes. Individuals are starving inside.
  </p>
</div> `;