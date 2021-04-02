function showStyle(event, tabname) {
  console.log(tabname);
  if (document.querySelector(`.${tabname}`).style.display === "block") {
    document.querySelector(`.${tabname}`).style.display = "none";
    event.target.classList.remove("fa-window-close");
    event.target.classList.add("fa-align-justify");
  } else {
    document.querySelector(`.${tabname}`).style.display = "block";
    event.target.classList.remove("fa-align-justify");
    event.target.classList.add("fa-window-close");
  }
}
function copyText(id){
  let copyText = document.querySelector(`#${id}`);
  const el = document.createElement('textarea');
  el.value=copyText.textContent;
  el.setAttribute('readonly','');
  el.style.position='absolute';
  el.style.left= '-99999px';
  document.body.appendChild(el);
  

  el.select();
  
  document.execCommand("copy");
  document.body.removeChild(el);
}
function snackbar(){
document.querySelector("#snackBar").classList.remove("hidden");
document.querySelector("#snackBar").classList.add("popup");

setTimeout(()=>{
  document.querySelector("#snackBar").classList.remove("popup");
  document.querySelector("#snackBar").classList.add("hidden");
},3000)
}