$( document ).ready(function() {

  // SUBMIT FORM
    $("#postForm").submit(function(event) {
    // Prevent the form from submitting via the browser.
    event.preventDefault();
    ajaxPost();
  });


    function ajaxPost(){
      debugger;
      // PREPARE FORM DATA
      var formData = {
        postTitle : $("#postTitle").val(),
        postContent :  $("#postContent").val()
      }


      // DO POST
      $.ajax({
      type : "POST",
      contentType : "application/json",
      url : "http://localhost:3030/ajaxLoadPost",
      data : JSON.stringify(formData),
      dataType : 'json',
      success : function(post) {
        $("#postResultDiv").html("<p>" +
          "Post Successfully! <br>" +
          "--> " + post.postTitle + " " + post.postContent + "</p>");
      },
      error : function(e) {
        alert("Error!")
        console.log("ERROR: ", e);
      }
    });

      // Reset FormData after Posting
      resetData();

    }

    function resetData(){
      $("#postTitle").val("");
      $("#postTitle").val("");
    }
})
