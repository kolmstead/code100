const isaiah = "Inside<br>&nbsp starvation<br>&nbsp&nbsp  are<br>&nbsp&nbsp&nbsp  individual<br>&nbsp&nbsp&nbsp&nbsp &nbspattitudes.<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hippocritical<br>&nbsp&nbsp&nbsp&nbsp attitudes.<br>&nbsp&nbsp&nbsp Individuals<br>&nbsp&nbsp are<br>&nbsp starving<br>inside.";

function addChiasmus(){
  document.getElementById('joe').innerHTML=`${isaiah}`;
}

document.getElementById('joe').addEventListener('click',addChiasmus,false);