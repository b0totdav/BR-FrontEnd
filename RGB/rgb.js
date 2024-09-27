    let doboz=document.getElementById("rgb");

    function ColorChange(){
        let red=document.getElementById("Red").value;
        $("#rValue").text(red)
        let green=document.getElementById("Green").value;
        $("#gValue").text(green)
        let blue=document.getElementById("Blue").value;
        $("#bValue").text(blue)
        let alpha=document.getElementById("Alpha").value/100;
        $("#aValue").text(alpha)
        doboz.style.backgroundColor="rgba("+red+","+green+","+blue+","+alpha+")";
    }
