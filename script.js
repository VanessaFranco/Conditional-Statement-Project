$(".luffy").hide();
$(".nami").hide();
$(".zoro").hide();
$(".sanji").hide();
$("button").click(function(){
    var trait=$(".trait").val();
    var age=$(".age").val();
    if (trait==="childish"&&age<=20){
        $(".result").text("Luffy");
        $(".luffy").show();
    } else if (trait==="childish"&&age>=20){
        $(".result").text("Nami");
        $(".nami").show();
    } else if (trait==="serious"&&age<=20){
        $(".result").text("Sanji");
        $(".sanji").show();
    } else if (trait ==="serious"&&age>=20){
        $(".result").text("Zoro");
        $(".zoro").show();
    } else {
        $(".result").text("We don't understand");
    }
});