$(function(){
    //$.ajax(); $.get(); $.post();
    const url='https://jsonplaceholder.typicode.com/';
    const data={
        'userid': "2",
        'title':"Próba",
        'body':"Ez egy próba"
    }
    $.get(url)
    .done(function(d){
        let size=d.length;
        $("#selector").attr("max",size);
        $("#selector").change(function(){
            let num=$(this).val();
            $.ajax({
                url:url + "todos/"+num,
                method:'get',
                dataType:"json"
            })
            .done(function(d){

                let o=d;
                let html= '<table><tr><th>Kulcs</th><th>Érték</th></tr>'
                for (const key in o) {
                   html+=`<tr><td>${key}</td><td>${o[key]}</td></tr>`
                }
                html+='</table>'
                $(".todo").html(html)
            })
        })
    })
    .fail(function(){})
    .always(function(){})
    $(document).on('click','#kuld',function(){
        $.ajax({
            url:url+'posts',
            method:'POST',
            dataType:'json',
            data:data
        })
        .done(function(d){
            console.table(d);
        })
    })
    $(document).on('click','#patch',function(){
        $.ajax({
            url:url+'posts/1',
            method:'PATCH',
            data: JSON.stringify({
                'title':'ez már változtatott'
            }),
            contentType: "application/json; charset=utf-8"
        })
        .done(function(d){
            console.table(d);
        })
    })
    $(document).on('click','#delete',function(){
        $.ajax({
            url:url+'posts/1',
            method:'DELETE',
        })
        .done(function(d){
            console.table(d);
        })
    })

})