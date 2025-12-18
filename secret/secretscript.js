function checkCode() {
    const correctCode = "goodbyeworld!";
    const input = document.getElementById("codeInput").value;
    const error = document.getElementById("errorMsg");
  
    if (input === correctCode) {
      window.location.href = "index.html";
    } else {
      error.style.display = "block";
    }
  }