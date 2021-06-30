
function openNav(){
  const navList = document.getElementById("navList");
  if(navList.classList.contains("nav-open")){
    navList.classList.remove("nav-open");
    document.body.style.overflow = "scroll"
    return;
  }
  navList.classList.add("nav-open")
  document.body.style.overflow = "hidden"
}