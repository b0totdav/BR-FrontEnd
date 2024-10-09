$(function(){
    //$.ajax(); $.get(); $.post();
    let url='https://jsonplaceholder.typicode.com/todos';
    $.get(url)
    .done(function(d){
        let size=d.length;
        $("#selector").attr("max",size);
        $("#selector").change(function(){
            let num=$(this).val();
            url+="/"+num;
            $.ajax({
                url:url,
                method:'get',
                dataType:"json"
            })
            .done(function(d){
                $(".content").append(JSON.stringify(d));
            })
        })
    })
    .fail(function(){})
    .always(function(){})

})