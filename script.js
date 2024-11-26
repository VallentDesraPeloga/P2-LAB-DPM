document.body.style.margin = "0";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "#d3d3d3";

const container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "space-between";
container.style.alignItems = "center";
container.style.width = "80%";
document.body.appendChild(container);

const leftBox = document.createElement("div");
leftBox.style.width = "100px";
leftBox.style.height = "100px";
leftBox.style.backgroundColor = "yellow";
container.appendChild(leftBox);

const centerText = document.createElement("p");
centerText.textContent = "Teks di Tengah Layar";
centerText.style.fontSize = "24px";
centerText.style.fontWeight = "bold";
centerText.style.color = "blue";
centerText.style.textAlign = "center";
centerText.style.flex = "1";
container.appendChild(centerText);

const rightBox = document.createElement("div");
rightBox.style.width = "100px";
rightBox.style.height = "100px";
rightBox.style.backgroundColor = "black";
container.appendChild(rightBox);
