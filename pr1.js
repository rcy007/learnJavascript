function main() {
  console.log("main start");

  setTimeout(() => {
    console.log("macrotask 1 finished");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("microtask 1 finished");
    })
    .then(() => {
      console.log("microtask 2 finished");
    });

  console.log("main end");
}

main();