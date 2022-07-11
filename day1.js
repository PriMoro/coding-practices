function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      console.log(s[i]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] != "a" &&
      s[i] != "e" &&
      s[i] != "i" &&
      s[i] != "o" &&
      s[i] != "u"
    ) {
      console.log(s[i]);
    }
  }
  //   for (v of s) {
  //     if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u") {
  //       console.log(v);
  //     }
  //   }
  //   for (v of s) {
  //     if (v != "a" && v != "e" && v != "i" && v != "o" && v != "u") {
  //       console.log(v);
  //     }
  //   }
}

let s = "learnjavascriptloopsinhackerrankweekofcode";

vowelsAndConsonants(s);
