function counter() {
  let n = 0;
  return () => ++n;
}
const next = counter();
console.log(next()); // 1
console.log(next()); // 2
