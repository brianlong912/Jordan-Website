function showInfo(courseworkItem) {
  if(courseworkItem.classList.contains("active")){
    courseworkItem.classList.remove("active");
    return;
  }
  courseworkItem.classList.add("active")
}