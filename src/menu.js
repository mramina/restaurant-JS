export default function menuPage() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = "";

  const section = document.createElement("section");
  section.innerHTML = `
    <h1 style = "font-size: 80px; text-align: center;">Menu</h>

    <div style = display: flex; justify-content: center; gap: 20px;">
    <img src = "./images/IMG_1543.PNG" style = "border-radius: 10px; width:300px;">
    <img src = "./images/IMG_1544.PNG" style = "border-radius: 10px; width:300px;">
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; margin-top: 20px; margin-left: 150px;">
            <img src="./images/IMG_1546.PNG" style="border-radius: 10px; width: 60%; height: auto;">
            <img src="./images/IMG_1547.PNG" style="border-radius: 10px; width: 60%; height: auto;">
            <img src="./images/IMG_1548.PNG" style="border-radius: 10px; width: 60%; height: auto;">
            <img src="./images/IMG_1549.PNG" style="border-radius: 10px; width: 60%; height: auto;">
            <img src="./images/IMG_1550.PNG" style="border-radius: 10px; width: 60%; height: auto;">
            <img src="./images/IMG_1551.PNG" style="border-radius: 10px; width: 60%; height: auto;">
            <img src="./images/IMG_1552.PNG" style="border-radius: 10px; width: 60%; height: auto;">
            <img src="./images/IMG_1553.PNG" style="border-radius: 10px; width: 60%; height: auto;">
            <img src="./images/IMG_1554.PNG" style="border-radius: 10px; width: 60%; height: auto;">
            <img src="./images/IMG_1555.PNG" style="border-radius: 10px; width: 60%; height: auto;">
            <img src="./images/IMG_1556.PNG" style="border-radius: 10px; width: 60%; height: auto;">
            <img src="./images/IMG_1557.PNG" style="border-radius: 10px; width: 60%; height: auto;">
        </div>
    `;

  mainContent.appendChild(section);
}
