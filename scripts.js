/**
 * 1. LISTEN for and HANDLE the 'submit' event.
 * 2. QUERY the DOCUMENT for the <form> fields and store those VALUES in variable(s).
 * 3. Add fname and lname into its own Object.
 * 4. Push the new Object onto an Array
 * 5. Randomly select a 'student Object' from the Array and console.log().
 */

function submitHandler(event) {
  event.preventDefault(); // Stop the browser's submission.

  const fname = document.querySelector("#fname").value;
  const lname = document.querySelector("#lname").value;
}

document.querySelector("form").addEventListener("submit", submitHandler);
