$(document).ready(function() {

  //Jump to section- Home/Portfolio/Contact
  $(".page-lnk").click(function() {
    var anchor = $(this).attr("dest");

    $("html, body").animate(
      {
        scrollTop: $("#" + anchor).offset().top
      },
      1000
    );
  });

  //Store selected #hashTags
  var selectedTag = [];

  //Change state and add to selectedTag array
  $("button").on("click", function() {

    if($(this).attr("data-status") === "inactive") {
      $(this).attr("data-status", "active");
      var tag = $(this).attr("id");
      selectedTag.push(tag);
      console.log("selectedTag", selectedTag);
    } else {
      $(this).attr("data-status", "inactive");
      var tag = $(this).attr("id");
      var index = selectedTag.indexOf(tag);
      selectedTag.splice(index, 1);
      console.log("selectedTag", selectedTag);
    }

    //Convert to string to send as URL query
    var tags = selectedTag.join(",").toString();
    console.log("Tags string", tags);

    //GET request
    $.ajax("/find/" + selectedTag, {
      method: "GET",
      data: tags
    }).then(function(result) {
      console.log("result received", result);
    });
  });

});