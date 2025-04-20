const api_url =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const generateButton = document.getElementById("btn");
const display = document.querySelector(".display");
const displayimg = document.querySelector(".display img");


generateButton.addEventListener("click", () => {
  generateQR();
});


const generateQR = () => {
  const texturl = document.querySelector(".value").value;
  if (texturl.length > 0) {
    const tofetch = api_url + texturl;
    displayimg.src = tofetch;
    displayimg.onload = () => {
      display.classList.add("showimg"); // only when image is ready!
    };
  } else {
    display.classList.remove("showimg");
    

    document.querySelector(".value").classList.add("error");
    setTimeout(() => {
      document.querySelector(".value").classList.remove("error");
    }, 1000);
  }
};
