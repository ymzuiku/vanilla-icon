function promiseFor(list, task, sleep) {
  let i = -1;
  return new Promise(res => {
    function recursion() {
      i++;
      if (i < list.length) {
        if (sleep) {
          promiseFor.sleep(sleep).then(() => {
            task(list[i], i).then(recursion);
          });
        } else {
          task(list[i], i).then(recursion);
        }
      } else {
        res();
      }
    }
    recursion();
  });
}

promiseFor.sleep = function(ms) {
  return new Promise(res => {
    setTimeout(res, ms);
  });
};

module.exports = promiseFor;
