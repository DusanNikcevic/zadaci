function ran_inclusive(a, b, c) {
  if (a <= c && c <= b) {
    return true;
  }
  return false;
}

console.log(ran_inclusive(-10, 13, -25));
