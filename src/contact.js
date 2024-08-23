export default function contactPage() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = "";

  const section = document.createElement("section");
  section.innerHTML = `
         <h1>Contact Us</h1>
        <p>Я устала, представим, что здесь все написано</p>
        <p>Email: example@restaurant.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: направо налево 5 отжиманий</p>
    `;

  mainContent.appendChild(section);
}
