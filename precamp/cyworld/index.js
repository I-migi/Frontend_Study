const menuHome = () => {
  document.getElementById("contentFrame").setAttribute("src","home.html")
  document.getElementById("menuHome").style ="color:black; background-color: white;"
  
}

const menuJukebox=() =>{
  document.getElementById("contentFrame").setAttribute("src","jukebox.html")
  document.getElementById("menuJukebox").style ="color:black; background-color: white;"
}

const menuGame=() => {
  document.getElementById("contentFrame").setAttribute("src","game.html")
  document.getElementById("menuGame").style ="color:black; background-color: white;"
}