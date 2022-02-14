let sidebar = 200;
$(".sidebar").css("height", window.innerHeight);
$(".sidebar").css("width", sidebar);
$(".navbar").css("width", window.innerWidth - 100);
$("#side").on("click", function () {
    $(".sidebar").css("width", "700");
    $("#side").css("display","none");
    $("#x").css("display", "block");
    $(".sidebar .list div").css("display", "block");
});
$("#x").on("click", function () {
    $(".sidebar").css("width", "200");
    $("#x").css("display", "none");
    $("#side").css("display", "block");
    $(".sidebar .list div").css("display", "none");

});
$("#x").on("click", function () {
    $(".sidebar").css("width", "200");
    $("#x").css("display", "none");
    $("#side").css("display","block");
})

