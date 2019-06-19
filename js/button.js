function setOnOff(button) {

  if (button.classList.contains("on")) {
    button.classList.remove("on");
  }
  else {
    button.classList.add("on");
  }
}