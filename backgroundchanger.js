const button = document.getElementById("ChangeButton");
const text = document.getElementById("CodeName");

let HexCode = "";

function ChangeCode() {
    let R = (Math.round(Math.random()*0xFF).toString(16)).padStart(2, "0");
    let G = (Math.round(Math.random()*0xFF).toString(16)).padStart(2, "0");
    let B = (Math.round(Math.random()*0xFF).toString(16)).padStart(2, "0");
    HexCode = "#" + R + G + B;
    text.innerText = "HEX COLOR : " + HexCode;
    document.body.style.backgroundColor = HexCode;
}

ChangeCode();
button.addEventListener("click", ChangeCode);