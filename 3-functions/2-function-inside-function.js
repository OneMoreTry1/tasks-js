// how do not mutate 'global' text

let text = "global";

// start code
function outside() {
  text = "outside";

  function inside() {
    text = "inside";

    return text;
  }

  return inside;
}
// end code

console.log(text); // global!!!!
