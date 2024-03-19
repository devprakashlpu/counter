let count = 0;
let btns = document.querySelectorAll(".btn");
let value = document.querySelector("#value");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const val = e.currentTarget.classList;
        if(val.contains('decrease')){
            count--;
        }
        else if(val.contains('increase')){
            count++;

        }
        else{
            count = 0;
        }

        if(count > 0){
            value.style.color = "green";
        }
        else if(count < 0){
            value.style.color = "red";
        }
        if(count == 0){
            value.style.color = "black";
        }

        value.textContent = count;

       
    })

    
})  