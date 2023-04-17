const mmm = {a: 'a'};

if (typeof define === "function") {
  define(function () {
    return mmm;
  });
} else if (typeof exports !== "undefined") {
  module.exports = mmm;
} else {
  this.mmm = mmm;
}
