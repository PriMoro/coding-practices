function reverse(s) {
  if (typeof s === "string") {
    console.log(s.split("").reverse().join(""));
  } else {
    console.log(s.toString().split("").reverse().join(""));
  }
}

reverse(1234);
