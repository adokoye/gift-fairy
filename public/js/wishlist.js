$(document).ready(function () {
});

// delete function
$('#fashion, #electronics, #home, #all, #pets').on('click', '.delete', function () {
  $(this).parent('p').remove();
});

// add wishitem
$("#add-item").on('click', function (event) {
  event.preventDefault();

  var brand = $('#brand').val().trim();
  var product = $('#product').val().trim();

  $('#brand').val('');
  $('#product').val('');

  console.log(brand, product);

  // add items to the wishlist
  $("<p>").html(brand + ' ' + product + '<button class="delete is-pulled-left"></button>').appendTo("#all");

});

// Share wishlist email modal
$("#share-btn").click(function () {
  $(".modal").addClass("is-active");
});

$(".modal-close, #send-email").click(function () {
  $(".modal").removeClass("is-active");
});

// wishlist panel toggle
// $(function () {
//   $('ul.li.tablinks:first').addClass('is-active');
//   $('li.tablinks').click(function () {
//     $('li.tablinks').removeClass('is-active');
//     $(this).addClass('is-active');
//     return true;
//   });
//   $('.tabcontent:first').show();
// });  