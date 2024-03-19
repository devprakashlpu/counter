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

        value.textContent = count;
    })

    
})