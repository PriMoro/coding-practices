function reverse(s) {
  try {
    s.split("").reverse().join("");
    console.log(s);
  } catch (error) {
    console.log(error);
  } finally {
    // if (error) {
    //   console.log(error);
    // }
    console.log(s);
  }
}

reverse("1234");
