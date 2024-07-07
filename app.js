
let bx=document.querySelector("#bx")
let item=document.querySelectorAll(".item")
let fruits=document.querySelector(".fruits-bx")


bx.addEventListener("keyup",()=>{
    let filter1 = bx.value.toLowerCase();;
console.log(filter1); // This should print the input element

item.forEach((item)=>{
    let text=item.textContent.toLowerCase();//return  text written in item class
    if (text.includes(filter1)) { // Check if the item text includes the input value
        item.style.display = ''; // Show the item if it matches
    } else {
        item.style.display = 'none'; // Hide the item if it doesn't match
    }
    });

});
    bx.addEventListener('mouseover', () => {
        fruits.style.height = '330px';
        // bx.style.position='fixed'
        fruits.style.display = 'block'; 
    });

    bx.addEventListener('mouseout', () => {
        fruits.style.height = '0px';
    });
