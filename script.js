
// intereactive tabs for digital.html
$("#sketches").click(function() {
    $("#c-content").addClass("hidden");
    $("#s-content").removeClass("hidden");
});

$("#colored").click(function() {
    $("#s-content").addClass("hidden");
    $("#c-content").removeClass("hidden");
});

//interactive theme
$("#light").click(function() {
    $("#light").addClass("hidden");
    $("#dark").removeClass("hidden");
    $("html").addClass("light");
    $("html").removeClass("dark");
});

$("#dark").click(function() {
    $("#dark").addClass("hidden");
    $("#light").removeClass("hidden");
    $("html").addClass("dark");
    $("html").removeClass("light");
});



//UNPLANNED INTERACTIVITY (DO NOT GRADE, NOT INCLUDED IN DESIGN JOURNEY)

//interactive tabs for physical.html
$("#pc-button").click(function() {
    $("#p-sketches").addClass("hidden");
    $("#p-doodles").addClass("hidden");
    $("#p-completed").removeClass("hidden");
    $("#p-murals").addClass("hidden");
});

$("#ps-button").click(function() {
    $("#p-completed").addClass("hidden");
    $("#p-doodles").addClass("hidden");
    $("#p-sketches").removeClass("hidden");
    $("#p-murals").addClass("hidden");
});

$("#pd-button").click(function() {
    $("#p-completed").addClass("hidden");
    $("#p-sketches").addClass("hidden");
    $("#p-doodles").removeClass("hidden");
    $("#p-murals").addClass("hidden");
});

$("#pm-button").click(function() {
    $("#p-completed").addClass("hidden");
    $("#p-sketches").addClass("hidden");
    $("#p-doodles").addClass("hidden");
    $("#p-murals").removeClass("hidden");
});
