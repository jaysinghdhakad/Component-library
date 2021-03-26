function showStyle(tabname){
    console.log(tabname);
    let tabContent = document.querySelectorAll("#tabcontents");
    console.log(tabContent);
    tabContent.forEach(tab => {
      tab.style.display="none";  
    });
    document.querySelector(`.${tabname}`).style.display = "block";
}