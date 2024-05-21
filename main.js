let button = document.querySelector('#btn');

let container = document.querySelector('.container');

let input = document.querySelector('#search');

let place = "Search Anything..."

let placeLength = 0;

button.addEventListener("click",()=>{
    container.classList.toggle('active');
    reCall();
})

const inputPlaceholderHandler = () =>{
    console.log(placeLength);
    console.log(place.length);
    if(input.placeholder.length !== 18){
        input.placeholder = input.placeholder + place.charAt(placeLength);
        placeLength++;

        if(input.placeholder.length === 18){
            placeLength = 0;
        }

        setTimeout("inputPlaceholderHandler()",80);
    }
}

const reCall = () =>{
    if(container.classList[1] == 'active'){
        setTimeout("inputPlaceholderHandler()",500)
        console.log("Active");
    }else{
        input.placeholder = "";
        console.log("Not Active");
    }
}