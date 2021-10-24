
const getButtonDone = document.querySelector(".done");
const getText = document.querySelector(".text-user");
const getLaunch = document.querySelector(".launch");
const getTexth1 = document.querySelector(".text-edit");


getLaunch.addEventListener("click", function(){
    getButtonDone.addEventListener("click", function(){
        let strInput = "";
        strInput += getText.value;
        getTexth1.innerHTML = strInput;

        setTimeout(() =>{
            getTexth1.classList.add("effect")
        }, 500);

        if(!getTexth1.classList.contains("effect")){
            getLaunch.style.display = "none";
        
        }
        
    })
})



