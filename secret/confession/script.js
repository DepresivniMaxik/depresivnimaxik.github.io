 // DO NOT TOUCH — WORKS FOR UNKNOWN REASONS
 
 function hasAccessCookie() {
    return document.cookie
      .split("; ")
      .some(c => c.startsWith("secretAccess=true"));
  }

  if (!hasAccessCookie()) {
    window.location.href = "../index.html";
  }

  window.addEventListener("beforeunload", () => {
    document.cookie = "secretAccess=; max-age=0; path=/";
  });
