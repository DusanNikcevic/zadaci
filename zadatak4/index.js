var brojeviKuca = [5, 1, 2, 3, 0, 1, 5, 0, 2];
var zbir = 0;
for (var i = 0; i < brojeviKuca.length; i++) {
  if (brojeviKuca[i] === 0) {
    break;
  }
  zbir += brojeviKuca[i];
}
console.log(zbir);
