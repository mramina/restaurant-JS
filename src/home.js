export default function homePage() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = "";

  const section = document.createElement("section");
  section.innerHTML = `
    <div class = "sidebar">
    <img src="./images/IMG_1540.PNG" style = "border-radius: 10px;">
    <img src="./images/IMG_1541.PNG" style = "border-radius: 10px;">
    <img src="./images/IMG_1542.PNG" style = "border-radius: 10px;">
    </div>

    <main class = "main-content">
    <h1 style = "font-size: 80px; text-align: center;"> Coffee Story </h1>
    <p style = "font-size: 30px; text-align: center;'> всегда самый вкусный</p>
    <p style="font-size: 25px;"> График работы: </p>
            <p style="font-size: 20px;"> Arabica | 8:00 - 00:00 </p>
            <p style="font-size: 20px;"> Грозный Молл | 10:00 - 22:00 </p>
            <p style="font-size: 20px;"> Лорсанова,10 | пн-пт 8:00 - 23:00 </p>
            <p style="font-size: 20px;"> Митаева,21 | сб-вс 9:00 - 23:00 </p>
            <p style="font-size: 20px;"> Эсамбаева, 4 | 8:00 - 00:00 </p>
            </maim>
    `;

  mainContent.appendChild(section);
}
