let i = 0;
$("#keke").on("click", function () {
    $(".sidebar").animate({
        width: '605px'
    }, 200);
    $("#x").css({
        'display':'block'
      }, 200);
    $("#home").animate({
        left: '0%'
    }, 300);
    $("#stad").animate({
        left: '0'
    }, 500);
    $("#store").animate({
        left: '0'
    }, 700);
    $("#faq").animate({
        left: '0'
    }, 900);
    $("#about").animate({
        left: '0'
    }, 1100);
    $("#contact").animate({
        left: '0'
    },1300);
    $("#social").animate({
        left: '0'
    },1500); 
});
$("#x").on("click", function () {
    $("#x").css({
        'display':'none'
      }, 500);
    $("#home").animate({
        left: '-800px'
    }, 100);
    $("#stad").animate({
        left: '-800px'
    }, 300);
    $("#store").animate({
        left: '-800px'
    }, 500);
    $("#faq").animate({
        left: '-800px'
    }, 700);
    $("#about").animate({
        left: '-800px'
    }, 900);
    $("#contact").animate({
        left: '-800px'
    },1100);
    $("#social").animate({
        left: '-800px'
    }, 1300);
    $(".sidebar").animate({
        width: '0'
    }, 1500);
});
$("#c1").hover(function () {
    document.getElementById("im1").src = "../image/egypt.png";
    $("#h1").css("color","green");
       }, function () {
    document.getElementById("im1").src = "../image/egblack.png";
    $("#h1").css("color", "gray");
}
);
$("#c2").hover(function () {
    document.getElementById("im2").src = "../image/earth.png";
    $("#h2").css("color","green");
       }, function () {
    document.getElementById("im2").src = "../image/earth (1).png";
    $("#h2").css("color", "gray");
}
);
$("#c1").on("click", function () {
    $("#stone").css("display", "none");
    $("#line").css("width", "50%");
    $("#cir1").css("backgroundColor", "green");
    $("#cir1 h1").css("color", "white");
    $("#cir2").addClass("active");
    $("#sttwo").css("display", "block");
    $(".footer").css("bottom","-30%");
});
$("#c2").on("click", function () {
    $("#stone").css("display", "none");
    $("#line").css("width", "50%");
    $("#cir1").css("backgroundColor", "green");
    $("#cir1 h1").css("color", "white");
    $("#cir2").addClass("active");
    $("#sttwo").css("display", "block");
    $(".footer").css("bottom", "-30%");
    $("#country").prop('disabled', false);
});

    
$("#Entertainment").hover(function () {
        $("#rad1").css("color"," green ");
    }, function () {
         $("#rad1").css("color"," gray");
    }
);
$("#Sports").hover(function () {
        $("#rad2").css("border","10px green solid");
        
    }, function () {
         $("#rad2").css("border","10px gray solid");
        
    }
);
$("#birth").focus(function () { 
    check();
});
$("#email").focus(function () { 
    check();
});
$("#flexCheckChecked").focus(function () { 
    check();
});
$("#num").focus(function () {
    check();
});
check();
function check() {
    let i = 0;
    if ($("#birth").val().length != 0) {
        i += 1;
        console.log(i)
    }
    if ($("#email").val().length != 0) {
        i += 1;
        console.log(i)
    }
    if ($("#flexCheckChecked").val().length != 0) {
        i += 1;
    }
    if ($("#num").val().length != 0) {
        i += 1;
        $("#btn").addClass("abled");

    }
    if ($("#rad1").is(':checked')) {
        i += 1;
    }
     if ($("#rad2").is(':checked')) {
        i += 1;
    }

    if (i >= 3) {
        $("#Proceed").addClass('abled');
        $("#Proceed").prop('disabled', false);
        $("#Proceed").hover(function () {
               $(this).css('backgroundColor', "#417732");
                
            }, function () {
                $(this).css('backgroundColor', "green");            }
        );

    }
    
}

let input = document.querySelectorAll(".three .form input");
for (let z = 0; z < input.length; z++) {
    input[z].addEventListener("change", check2);
}
function check2() {
    console.log("hii");
    let x=0
    if ($("#first").val().length != 0) {
        x += 1;
        console.log(x);
    }
    if ($("#sec").val().length != 0) {
        x += 1;
        console.log(x);
    }
    if ($("#last").val().length != 0) {
        x += 1;
        console.log(x);

    }
    if ($("#momName").val().length != 0) {
        x += 1;
        console.log(x);

    }
    if (x > 3) {
        console.log(x);
        $("#proceed2").prop('disabled', false);
        $("#proceed2").addClass('abled');
        $("#proceed2").hover(function () {
               $(this).css('backgroundColor', "#417732");
                
            }, function () {
                $(this).css('backgroundColor', "green");            }
        ); 
    }
}


let input2 = document.querySelectorAll(".form3 input");
for (let z = 0; z < input2.length; z++) {
    input2[z].addEventListener("change", check3);
}
function check3() {
    let y = 0;
    if ($("#id").val().length != 0) {
        y += 1;
    }
    if ($("#prfile").val().length != 0) {
        y += 1;
    }
    if ($("#idfile").val().length != 0) {
        y += 1;
    }
     if (y > 2) {
        $("#proceed3").prop('disabled', false);
        $("#proceed3").addClass('abled');
        $("#proceed3").hover(function () {
               $(this).css('backgroundColor', "#417732");
                
            }, function () {
                $(this).css('backgroundColor', "green");            }
        ); 
    }
}
$("#Proceed").on("click", function () {
    $("#sttwo").css("display", "none");
    $("#stthree").css("display", "block");
    $(".footer").css("bottom", "0");
    $("#cir3").addClass("active");
    $("#line").css("width", "55%");
     $("#cir2 h1").css("color", "white");
    $("#cir2").css("backgroundColor", "green");

});
$("#proceed2").on("click",function () { 
    $("#stthree").css("display", "none");
    $("#stfour").css("display", "block");
    $(".footer").css("bottom", "-30%");
    $("#cir4").addClass("active");
    $("#line").css("width", "60%");
     $("#cir3 h1").css("color", "white");
    $("#cir3").css("backgroundColor", "green");
});
$("#proceed3").on("click",function () { 
     $("#stfour").css("display", "none");
     $("#buttons").css("display", "block");
     $("#stfive").css("display", "block");
     $("#headfive").css("display", "block");
    $(".footer").css("bottom", "-30%");
    $("#line").css("width", "100%");
     $("#cir4 h1").css("color", "white");
    $("#cir4").css("backgroundColor", "green");
});
$("#home").on("click", function () {
    location.href = "../index.html";
});

$("#back").on("click", function () {
    $("#stone").css("display", "block");
    $("#sttwo").css("display", "none");
    $(".footer").css("bottom","0");
    $("#line").css("width", "45%");
     $("#cir1 h1").css("color", "green");
     $("#cir2 h1").css("color", "gray");
    $("#cir1 ,#cir2").css("backgroundColor", "white");
    $("#cir2").removeClass("active");

});
$("#back2").on("click", function () {
    $("#sttwo").css("display", "block");
    $("#stthree").css("display", "none");
    $(".footer").css("bottom", "-25%");
    $("#line").css("width", "50%");
    $("#cir1 h1").css("color", "white");
    $("#cir2 h1").css("color", "green");
    $("#cir3 h1").css("color", "gray");
    $("#cir1").css("backgroundColor", "green");
    $("#cir2").css("backgroundColor", "white");
    $("#cir2").addClass("active");
    $("#cir3").removeClass("active");

});
$("#back3").on("click", function () {
    $("#stfour").css("display", "none");
    $("#stthree").css("display", "block");
    $(".footer").css("bottom", "0");
    $("#line").css("width", "55%");
    $("#cir4 h1").css("color", "gray");
    $("#cir3 h1").css("color", "green");
    $("#cir3").css("backgroundColor", "white");
    $("#cir4").removeClass("active");
});

