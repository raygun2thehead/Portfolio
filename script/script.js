$("#projectsBtn").on("click", function() {
    $("#projects").show();
    $("#contacts").hide();
    $("#resume").hide();
    })

$("#contactsBtn").on("click", function() {
    $("#contacts").show();
    $("#projects").hide();
    $("#resume").hide();
    })

$("#resumeBtn").on("click", function() {
    $("#resume").show();
    $("#contacts").hide();
    $("#projects").hide();
    })