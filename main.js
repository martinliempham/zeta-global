$(function() {
  $('#part2').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      income: {
        required: true
      }
    }
  });
});
