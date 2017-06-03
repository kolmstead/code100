const isaiah = "Inside<br>&nbsp starvation<br>&nbsp&nbsp  are<br>&nbsp&nbsp&nbsp  individual<br>&nbsp&nbsp&nbsp&nbsp &nbspattitudes.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hippocritical<br>&nbsp&nbsp&nbsp&nbsp attitudes.<br>&nbsp&nbsp&nbsp Individuals<br>&nbsp&nbsp are<br>&nbsp starving<br>inside.";

function addChiasmus(){
  document.getElementById('joe').innerHTML=`${isaiah2}`;
}

document.getElementById('joe').addEventListener('click',addChiasmus,false);

const isaiah2 = `
<div>
<p id='ch'>Inside</p>
<p id='ch'>&nbsp starvation</p>
<p id='ch'>&nbsp &nbsp are</p>
<p id='ch'>&nbsp &nbsp &nbsp individual</p>
<p id='ch'>&nbsp &nbsp &nbsp &nbsp attitudes.</p>
<p id='ch'>&nbsp &nbsp &nbsp &nbsp &nbsp Hippocritical</p>
<p id='ch'>&nbsp &nbsp &nbsp &nbsp attitudes.</p>
<p id='ch'>&nbsp &nbsp &nbsp Individuals</p>
<p id='ch'>&nbsp &nbsp are</p>
<p id='ch'>&nbsp starving</p>
<p id='ch'>inside.</p> 
</div> `;