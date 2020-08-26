$("#projectsBtn").on("click", function() {
    $("#projects").show();
    $("#pages").show();
    $("#contacts").hide();
    $("#resume").hide();
    })

$("#contactsBtn").on("click", function() {
    $("#contacts").show();
    $("#pages").show();
    $("#projects").hide();
    $("#resume").hide();
    })

$("#resumeBtn").on("click", function() {
    $("#resume").show();
    $("#pages").show();
    $("#contacts").hide();
    $("#projects").hide();
    })