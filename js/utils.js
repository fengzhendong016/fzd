$.extend({
  component: function (selector, callback) {
    $("#" + selector).load("common/" + selector + ".html", function () {
      if (callback) callback();
    });
  }
});