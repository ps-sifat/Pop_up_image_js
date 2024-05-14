const body = document.body;
const clickBtn = document.querySelector(".clickBtn");
const box = document.querySelector(".box");
const inputBox = document.querySelector(".inputBox");
const copyBtn = document.querySelector(".copyBtn");
const copyDone = document.querySelector(".copyDone");
const boxHeading = document.querySelector(".boxHeading");

clickBtn.addEventListener("click", ()=>{
    boxHeading.innerHTML = "Generate color code";
    copyDone.style.display = "none";
    copyBtn.style.display = "block";
    const colorCode = generateColor();
    box.style.background = colorCode;
    inputBox.value = colorCode;

    copyBtn.addEventListener("click" ,() =>{
        copyTheColorCode(colorCode);
    });
});

function generateColor(){
        // rgb(102, 51, 153);
    const red = Math.round(Math.random() *255);
    const green = Math.round(Math.random() *255);
    const blue = Math.round(Math.random() *255);
    return (`rgb(${red} , ${green}, ${blue})`);
}

// make copy function
function copyTheColorCode(colorCode){
    navigator.clipboard.writeText(colorCode);
    copyDone.style.display = "block";
    copyBtn.style.display = "none";
    boxHeading.innerHTML = `Copy Done ${colorCode}` ;
}

