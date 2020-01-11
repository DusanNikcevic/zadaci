function brojUcenika(n) {
  var vrata = [];
  var ucenik = 1;
  var openDors = 0;
  for (var i = 0; i < n; i++) {
    vrata.push(false);
  }

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var num = ucenik * (j + 1);
      if (num > vrata.length) {
        break;
      }
      console.log(num);

      vrata[num - 1] = !vrata[num - 1];
    }
    ucenik++;
  }
  console.log(vrata);
}

brojUcenika(5);
