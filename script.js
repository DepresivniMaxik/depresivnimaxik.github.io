function toggleThemes() {
    const themes = document.getElementById("themes");
    themes.style.display = themes.style.display === "none" ? "block" : "none";
  }

  function toggleSkills(id) {
    const skillBox = document.getElementById(id);
    skillBox.classList.toggle("open");
  }
  
  function toggleComputer() {
    const section = document.getElementById("computerThemes");
    section.style.display = section.style.display === "none" ? "block" : "none";
  }