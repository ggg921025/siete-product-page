$(document).ready(function () {
  $('.radio-button__input').click(function (e) {
    $(".chip-item").removeClass("active");
    let chip_item = this.parentElement.parentElement.parentElement;
    $(chip_item).addClass('active');
    // $(this).parent().addClass('checked');
  });
});