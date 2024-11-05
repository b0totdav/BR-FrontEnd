$(function () {
    let benzin = [
        {
            value: '7.6',
            text: '1000 cm3-ig'
        },
        {
            value: '8.6',
            text: '1001 - 1500 cm3-ig'
        },
        {
            value: '9.5',
            text: '1501 - 2000 cm3-ig'
        },
        {
            value: '11.4',
            text: '2001 - 3000 cm3-ig'
        },
        {
            value: '13.3',
            text: '3001 cm3 felett'
        }
    ]
    let diesel = [
        {
            value: '5.7',
            text: '1500 cm3-ig'
        },
        {
            value: '6.7',
            text: '1501 - 2000 cm3-ig'
        },
        {
            value: '7.6',
            text: '2001 - 3000 cm3-ig'
        },
        {
            value: '9.5',
            text: '3001 cm3 felett'
        }
    ]
    let uzemanyag;
    let filled = [false, false, false, false, false, false, false, false];
    let ertekek = {}
    $("form").submit(function (e) {   //Az kitöltött űrlap elemei nem kerülnek törlésre.
        e.preventDefault();
    })

    $("[type=submit]").click(function(){
        szamitas(ertekek);
    })

    $("[name=uzemanyagInput]").change(function () {
        uzemanyag = $(this).val();
        filled[0] = true;
        $("#cm3Input").html('<option value="-1"></option>');
        if (uzemanyag === "diesel") {
            getUzemanyag(diesel);
        }
        else {
            //benzin, elektromos és lpg meghajtású járművek esetén a benzinhez viszonyít
            getUzemanyag(benzin);
        }
    })

    $("input, select").change(function () {
        
        let element = $(this);
        //console.log($(this).attr("name"))
        //uzemanyagInput   amortizaciosDijInput   arLiterInput    cm3Input   rendszmInput  gyartoInput    honnanHovaInput   megtettKmInput
        ertekek[$(this).attr("name")] = $(this).val();
        console.table(ertekek);
        switch (element.attr("name")){
            case "uzemanyagInput" :
                filled[0] = true;                
                break;
            case "amortizaciosDijInput" :
                filled[1] = true;
                break;
            case "arLiterInput" :
                filled[2] = true;
                break;
            case "cm3Input" :
                filled[3] = true;
                break;
            case "rendszmInput" :
                filled[4] = true;
                break;
            case "gyartoInput" :
                filled[5] = true;
                break;
            case "honnanHovaInput" :
                filled[6] = true;
                break;
            case "megtettKmInput" :
                filled[7] = true;
                break;
        }
        
        if (!filled.includes(false)) {
            $("[type=submit]").attr("disabled", false);
        }
    })

})  //ready vége

function getUzemanyag(t) {
    t.forEach((o) => {
        $("#cm3Input").append(`<option value="${o.value}">${o.text}</option>`);
    })
}

function szamitas(ertekek){
    // for (const key in ertekek) {
    //     if (Object.hasOwnProperty.call(ertekek, key)) {
    //         //const element = ertekek[key];
            let fogy = 0; 
            if (key == "uzemanyagInput"){
                switch (ertekek[key].toLowerCase()){
                    case "elektromos": fogy = 3; break;
                    case "lpg": fogy = ertekek["cm3Input"] * 1.2; break;
                    default: fogy = ertekek["cm3Input"];
                }
            }
            let koltseg = fogy * megtettKmTavolsag / 100 * ertekek["arLiterInput"] + megtettKmTavolsag * amortizaciosDijInput;
            $(".koltseg").html(`<p>${koltseg}</p>`);
            
    //     }
    // }
}