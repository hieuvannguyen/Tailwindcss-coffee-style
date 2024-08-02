// Author: hieuvan.me

const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIcon = document.getElementById("ct-toggle-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // Click toggle menu icon
    
    topMenu.classList.toggle("ct-top-menu-expanded");
    topMenu.classList.toggle("hidden");
  } else {
    // Click outside toggle menu icon
    if (topMenu.classList.contains("ct-top-menu-expanded")) {
      topMenu.classList.remove("ct-top-menu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});
