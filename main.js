let formtest = document.querySelector(".emailForm");
let emailInput = document.querySelector("#email");
let errorShowText = document.querySelector(".errorText");

formtest.addEventListener("submit",(event)=>{
   let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g; 
    if(regExp.test(emailInput.value)){
        errorShowText.style.visibility= "hidden";
        formtest.style.border= " solid 1px borderColor var(--paleBlue-secondary-color)";
        

    }
    else{
        event.preventDefault();
        formtest.style.border = "solid 1px borderColor var(--LightRed-secondary-color)";
        errorShowText.style.visibility= "visible";
        emailInput.innerHTML.ariaPlaceholder="Some New Text";
    }
});