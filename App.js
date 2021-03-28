function showStyle(event, tabname) {
  console.log(tabname);
  let tabContent = document.querySelectorAll("#tabcontents");
  console.log(tabContent);
  tabContent.forEach((tab) => {
    tab.style.display = "none";
  });
  let buttons = document.querySelectorAll(".tab");
  buttons.forEach((button) => {
    button.classList.remove("Active");
  });
  document.querySelector(`.${tabname}`).style.display = "block";
  console.log(event.target);
  event.target.classList.add("Active");
}
