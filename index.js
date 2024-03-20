$(document).ready(function() {
  var totalInputs = $('#license-details-form input[type="text"]').length + $('#license-details-form select').length;
  var totalRadioGroups = $('#license-details-form input[type="radio"]').length / 2; 

  function updateProgressBar() {
    var filledInputs = $('#license-details-form input[type="text"]').filter(function() {
      return $(this).val().length >= 3;
    }).length + $('#license-details-form select').filter(function() {
      return $(this).val() !== "";
    }).length;

    var filledRadioGroups = $('#license-details-form input[type="radio"]:checked').length / 2; 
    var totalFilledInputs = filledInputs + filledRadioGroups;
    var percentage = (totalFilledInputs / (totalInputs + totalRadioGroups)) * 100;
    $('.progress-bar').css('width', percentage + '%');

    if (totalFilledInputs === totalInputs + totalRadioGroups) {
      $('#back-button').show();
    } else {
      $('#back-button').hide();
    }
  }

  $('#license-details-form input[type="text"], #license-details-form select, #license-details-form input[type="radio"]').on('input change', function() {
    updateProgressBar();
  });

  $('#back-button').click(function() {
    window.location.href = "index.html";
  });
});