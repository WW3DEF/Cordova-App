const content = "Hello World"
const text = document.querySelector(".text")
let index = 0;

 function sleep(delay){ 
     const start = new Date().getTime(); 
     const stde = start+delay;
     while (new Date().getTime() < start + delay);
    }

function typing(){
    text.textContent += content[index++];
    if(index >= content.length){
        clearInterval(si)
        text.style.borderRight = "none";
    }
}
let si = setInterval(typing, 200)


