function pickRandomName() {
  const names = ["dog", "cat", "bird", "snake", "pig", "fox"];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

document.getElementById("randomNameButton").addEventListener("click", () => {
  const name = pickRandomName();
  document.getElementById("randomName").textContent = name;
});
