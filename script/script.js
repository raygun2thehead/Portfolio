$("#projectsBtn").on("click", function() {
    $("#projects").show();
    $("#pages").show();
    $("#contacts").hide();
    $("#resume").hide();
    $('.navbar-collapse').collapse('hide');
    })

$("#contactsBtn").on("click", function() {
    $("#contacts").show();
    $("#pages").show();
    $("#projects").hide();
    $("#resume").hide();
    $('.navbar-collapse').collapse('hide');
    })

$("#resumeBtn").on("click", function() {
    $("#resume").show();
    $("#pages").show();
    $("#contacts").hide();
    $("#projects").hide();
    $('.navbar-collapse').collapse('hide');
    })