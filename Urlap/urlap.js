let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let pwdPattern = /^[\w]{8,256}$/;
let iranyitoszam = /(^[1-9])\d{3}$/;
let counter=document.getElementById("counter");
let comment=document.getElementById("passRec");
let errors=[];
let emailGood =false;
let passwordGood=false;
let irGood=false;

function EnableSubmit(){
    if(emailGood&&passwordGood&&irGood){
        $(".btn").prop("disabled",false);
    }else{
        $(".btn").prop("disabled",true);
    }
}

$(function(){   //ready
    $("form").submit(function(event){
        event.preventDefault();
    })
    $("input").change(function(){
        let email = $(this).val();
        let type = $(this).attr("type");
        if (!emailPattern.test(email) && type == "email"){
            errors.push("<p>Az email formátuma nem megfelelő!</p>");
            emailGood=false;
        }
        else{
            errors=errors.filter(error=>!error.includes("email"));
            emailGood=true;
        }
        let pwd = $(this).val();
        if (!pwdPattern.test(pwd) && type == "password"){
            errors.push("<p>A jelszó formátuma nem megfelelő!</p>");
            passwordGood=false;
        }
        else{
            errors=errors.filter(error=>!error.includes("jelszó"));
            passwordGood=true;

        }
        let ir=$(this).val();
        if (!iranyitoszam.test(ir) && type == "text"){
            errors.push("<p>Az irányítószám formátuma nem megfelelő!</p>");
            irGood=false;
        }else{
            errors=errors.filter(error=>!error.includes("irányítószám"));
            irGood=true
        }
        $(".error").html(errors.join(""));
        EnableSubmit();
        
    })
    $("#passRec").change(function(){
        $("#counter").text(100-($(this).val().length));
    })
})
