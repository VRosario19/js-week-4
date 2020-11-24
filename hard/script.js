window.updateTheBackground = function (button) {
  function changeBg() {
    document
      .getElementsByClassName("button")
      .addEventListener("click", changeBg).backgroundColor = "red";
    onclick;
  }
  function changeBackground() {
    document
      .getElementsByClassName("button")
      .addEventListener("click", changeBackground).backgroundColor = "white";
    onclick;
  }
};

changeBg();
