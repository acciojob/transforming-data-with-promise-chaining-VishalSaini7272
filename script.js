//your JS code here. If required.
const input = document.getElementById("ip");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Helper: returns a promise that resolves with a value after a delay
function delayPromise(value, time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), time);
  });
}

// Main function to start transformations
btn.addEventListener("click", () => {
  const num = Number(input.value);
  if (isNaN(num)) {
    output.textContent = "Please enter a valid number!";
    return;
  }

  output.textContent = ""; // clear previous result

  // Step 1: Resolve initial number after 2s
  delayPromise(num, 2000)
    .then((val) => {
      output.textContent = `Result: ${val}`;
      // Step 2: Multiply by 2 after 2s
      return delayPromise(val * 2, 2000);
    })
    .then((val) => {
      output.textContent = `Result: ${val}`;
      // Step 3: Subtract 3 after 1s
      return delayPromise(val - 3, 1000);
    })
    .then((val) => {
      output.textContent = `Result: ${val}`;
      // Step 4: Divide by 2 after 1s
      return delayPromise(val / 2, 1000);
    })
    .then((val) => {
      output.textContent = `Result: ${val}`;
      // Step 5: Add 10 after 1s
      return delayPromise(val + 10, 1000);
    })
    .then((finalVal) => {
      output.textContent = `Final Result: ${finalVal}`;
    })
    .catch((err) => {
      output.textContent = "Error: " + err;
    });
});
