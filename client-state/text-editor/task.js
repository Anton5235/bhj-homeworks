const editor = document.getElementById("editor"); 
const clearButton = document.getElementById("clear-button");

editor.value = localStorage.getItem("text");
editor.addEventListener("input", () => {
  localStorage.setItem("text", editor.value);
});
