function debounce(fn, dur) {
  dur = dur || 100;
  var timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, dur);
  };
}

export { debounce };
