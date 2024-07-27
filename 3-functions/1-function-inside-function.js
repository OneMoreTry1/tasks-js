// how to output the result of the function

let text = "global";

function outside() {
  text = "outside";

  function inside() {
    text = "inside";

    return text;
  }

  return inside;
}

console.log(text); // ?? global or outside or inside
