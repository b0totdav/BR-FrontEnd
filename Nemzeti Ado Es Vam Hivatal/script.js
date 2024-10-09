let tav=0;
let price=0;
let uzemanyag=0;
let amort=0;

$(function(){
    let benzin=[
        {
        value:'7,6',
        text:'1000 cm3-ig'
        },
        {
            value:'8,6',
            text:'1001-1500 cm3-ig'
        },
        {
            value:'9,5',
            text:'1501-2000 cm3-ig'
        },
        {
            value:'11,4',
            text:'2001-3000 cm3-ig'
        },
        {
            value:'13,3',
            text:'3001 cm3 fölött'
        },
    ]
    let diesel=[
    {
        value:'5,7',
        text:'1500 cm3-ig'
    },
    {
        value:'6,7',
        text:'1501-2000 cm3-ig'
    },
    {
        value:'7,6',
        text:'2001-3000 cm3-ig'
    },
    {
        value:'9,6',
        text:'3001 cm3 fölött'
    },
    ]
    $("form").submit(function(e){
        e.preventDefault();
    })

    let filled=[false,false,false,true,true,false,false,false,false]
    $("[name=fuelType]").change(function(){
        uzemanyag=$(this).val();
        filled[0]=true;
        $("#kobcenti").html('<option value ="-1"></option>');
        if(uzemanyag ==="diesel"){
            getUzemanyag(diesel);
        }else{
           getUzemanyag(benzin);
        }
    })
    $("input, select").change(function(){
        if(!filled.includes(false)){
            $("[type=submit]").attr("disabled",false);
        }
    })

    $("[name=amor]").change(function(){
        amort=$(this).val();
        filled[1]=true;
    })

    $("[name=pricing]").change(function(){
        price=Number($(this).text());
        filled[2]=true;
    })
    let model;
    $("[name=model]").change(function(){
        model=$(this).val();
        filled[5]=true;
    })
    let honnan;
    $("[name=honnan]").change(function(){
        honnan=$(this).val();
        filled[6]=true;
    })
    let hova;
    $("[name=hova]").change(function(){
        hova=$(this).val();
        filled[7]=true;
    })

    $("[name=tav]").change(function(){
        tav=Number($(this).text());
        filled[8]=true;
    })
})
function getUzemanyag(t){
    t.forEach((o)=>{
        $("#kobcenti").append(`<option value="${o.value}">${o.text}</option>`);
    })
}

function Szamit(){
    let osszeg = (tav*(uzemanyag/100))*price+tav*amort;
    console.log(tav);
    console.log(uzemanyag);
    console.log(price);
    console.log(amort);
    console.log(osszeg);

    $("#e").html('A visszatérintendő költség:'+osszeg+'Ft');
}
