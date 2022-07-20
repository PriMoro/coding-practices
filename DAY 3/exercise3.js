function reverse(s) {
  try {
    s = s.split("").reverse().join("");
    //console.log(s);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(s);
  }
}

reverse("1234");
