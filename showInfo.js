function showInfo(infoItem) {
  if(infoItem.classList.contains("active")){
    infoItem.classList.remove("active");
    return;
  }
  infoItem.classList.add("active")
}