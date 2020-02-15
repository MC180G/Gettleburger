// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-launch").on("click", function(event) {
      var id = $(this).data("id");
      var newLaunch = $(this).data("newlaunch");
  
      var newLaunchState = {
        launched: newLaunch
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newLaunchState
      }).then(
        function() {
          console.log("changed launch to", newLaunch);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCat = {
        name: $("#ca").val().trim(),
        launched: $("[name=launched]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  