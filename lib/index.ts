function promiseFor(
  list: any[],
  task: (value: any, index: number) => Promise<any>,
  sleep?: number
) {
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

promiseFor.sleep = function(ms: number) {
  return new Promise(res => {
    setTimeout(res, ms);
  });
};

export default promiseFor;
