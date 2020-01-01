function narcisistic(value) {
  var getPow = value
    .toString()
    .split("")
    .map(function(x) {
      return Math.pow(x, value.toString().length);
    });

  var getAcumulateValue = getPow.reduce(function(a, b) {
    return a + b;
  });

  return getAcumulateValue === value;
}
if (narcisistic(1634)) {
  console.log("Narcistik je");
} else {
  console.log("Nije narcistik");
}

var niz = [1, 2, 3, 4, 5];
var zbir = 0;
for (var i = 0; i < niz.length; i++) {
  zbir += niz[i];
}

console.log(zbir);
var zbir2 = niz.reduce(function(i, zbir) {
  return i + zbir;
});
console.log(zbir2);
