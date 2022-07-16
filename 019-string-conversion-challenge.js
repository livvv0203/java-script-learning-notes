"user strict";

/* Input comes from a textarea inserted into the DOM, 
and conversion will happen on button clicked. */

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").textContent = "Convert";

document.querySelector("button").addEventListener("click", function () {
  // Get value of input
  const text = document.querySelector("textarea").value;
  console.log(text);
  const rows = text.split("\n");
  console.log(rows);

  // Goal: underscore_case -> underscoreCase
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_'); // Into 2 variables
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // Add space and check mark
    console.log(`${output.padEnd(20, ' ')}${'⛵️'.repeat(i + 1)}`);
  }
});


