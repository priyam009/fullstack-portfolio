//Function to stop carousel slide change
function stopCarousel() {
  $(".carousel").carousel({ interval: false });
}

//Function to Jump to section- Home/Portfolio/Contact
function jumpSection() {
  $(".page-lnk").click(function() {
    var anchor = $(this).attr("dest");

    $("html, body").animate(
      {
        scrollTop: $("#" + anchor).offset().top
      },
      1000
    );
  });
}

function checkSelected() {
  var activeTags = [];

  $(".hashtag-row button").each(function(index, element) {
    if ($(element).attr("data-status") === "active") {
      activeTags.push($(element).attr("id"));
    }
  });

  return activeTags;
}

function arrayToString(selectedTag) {
  //Convert to string to send as URL query
  var tags = selectedTag.join(",").toString();
  return tags;
}

// Function to select tags
function selectTags() {
  //Store selected #hashTags
  var selectedTag = checkSelected();
  var tags = arrayToString(selectedTag);

  //Change state and add to selectedTag array
  $("button").on("click", function() {
    if ($(this).attr("data-status") === "inactive") {
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

    if (!tags) {
      $("#portfolio-content").empty();
    }

    //GET request
    $.ajax("/find/" + selectedTag, {
      method: "GET",
      data: tags
    }).then(function(result) {
      console.log("result received", result);
      $("#portfolio-content").empty();
      for (var i = 0; i < result.length; i++) {
        buildCarousel(i, result[i]);
        stopCarousel();
      }
    });
  });
}

function buildCarousel(index, result) {
  //Arrow with Left Slide
  var iLeft = "<i class='fas fa-chevron-left'></i>";
  var spanLeft = $("<span>").append(iLeft);
  var anchorLeft = $(
    "<a " +
      "class='carousel-control-prev' " +
      "href='#carousel-content-" +
      index +
      "' " +
      "role='button' " +
      "data-slide='prev'>"
  ).append(spanLeft);

  //Arrow with Right Slide
  var iRight = "<i class='fas fa-chevron-right'></i>";
  var spanRight = $("<span>").append(iRight);
  var anchorRight = $(
    "<a " +
      "class='carousel-control-next' " +
      "href='#carousel-content-" +
      index +
      "' " +
      "role='button' " +
      "data-slide='next'>"
  ).append(spanRight);

  //Page Three
  var pageThreeImg =
    "<img " +
    "src='./gifs/" + result.gif + ".gif' " +
    "class='d-block w-100 d-flex align-self-center' " +
    "alt='" + result.project + "'>";
  var pageThree = $(
    "<div " + "class='carousel-item page-three d-flex'>"
  ).append(pageThreeImg);

  //Page Two
  var pageTwoGit = "<a href='" + result.github + "' target='_blank'>" + "#github" + "</a>";
  var pageTwoApp = "<a href='" + result.website + "' target='_blank'>" + "#app" + "</a>";

  var pageTwoTags = $(
    "<div " + "class='d-flex justify-content-center page-two-tags'>"
  ).append(pageTwoGit, pageTwoApp);

  var pageTwoText =
    "<div " +
    "class='d-flex'>" + result.description +
    "</div>";

  var pageTwoContent = $(
    "<div " +
      "class='d-flex flex-column justify-content-between page-two-content'>"
  ).append(pageTwoText, pageTwoTags);

  var pageTwo = $(
    "<div " + "class='carousel-item d-flex flex-column page-two'>"
  ).append(result.project, pageTwoContent);

  //Page One
  var pageOneImg =
    "<img " +
    "src='./images/" + result.image + ".jpg' " +
    "class='d-block img-fluid' " +
    "alt='" + result.project + "'>";
  var pageOneTitle = "<div " + "class='page-one-div'>" + result.project + "</div>";
  var pageOne = $("<div " + "class='carousel-item active page-one'>").append(
    pageOneImg,
    pageOneTitle
  );

  //Carousel Inner
  var carouselInner = $("<div class='carousel-inner'>").append(
    pageOne,
    pageTwo,
    pageThree
  );

  //Carousel Content
  var carouselContent = $(
    "<div " +
      "id='carousel-content-" +
      index +
      "' " +
      "class='carousel slide carousel-fade' " +
      "data-ride='carousel'>"
  ).append(carouselInner, anchorLeft, anchorRight);

  //Attach to id- portfolio-content
  $("#portfolio-content").append(carouselContent);
}

function submitForm() {
  $("#submit-button").on("click", function() {
    event.preventDefault();

    var name = $("#name")
      .val()
      .trim();
    var email = $("#email")
      .val()
      .trim();
    var message = $("#msg")
      .val()
      .trim();

    var data = {
      name: name,
      email: email,
      message: message
    };

    $(".portfolio-form").trigger("reset");

    //GET request
    $.ajax("/entry", {
      method: "POST",
      data: data
    }).then(function() {
      console.log("Sent");
    });

    $("#after-submit").text("Thank you");

  });
}

$(document).ready(function() {
  jumpSection();
  selectTags();
  submitForm();
});
