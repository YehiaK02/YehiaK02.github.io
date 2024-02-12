function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;
    noButton.style.position = "absolute";
    document.getElementsByClassName("image")[0].src = "images/gun.gif";
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    document.getElementById("question").textContent =
      "The No button is just visual BOBAA!!";
    document.getElementById("name").style.display = "none";
  }
  if (response === "Yes") {
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "YAYYY see you on the 14th ALBYYYYY!!!! LOTS OF BESITOS FOR YOU!😘😘😘😘😘😘😘😘😘😘😘";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/kiss.gif";
    document.getElementById("yesButton").remove();
  }
}
