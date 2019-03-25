/**
 * 1. LISTEN for and HANDLE the 'submit' event.
 * 2. QUERY the DOCUMENT for the <form> fields and store those VALUES in variable(s).
 * 3. Add fname and lname into its own Object.
 * 4. Push the new Object onto an Array
 * 5. Randomly select a 'student Object' from the Array and console.log().
 */
const students = [
  { fname: " Ryan", lname: "Bettss" },
  { fname: " Bill", lname: "Bett" },
  { fname: " Dill", lname: "Bets" },
  { fname: " Will", lname: "Bts" },
  { fname: " Phil", lname: "Btts" }
];
function submitCreator(fname, lname) {
  // object
  const student = {
    fname,
    lname
  };

  return student;
}
// function getRandomIntInclusive(min, max) {
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  const fname = document.querySelector("#fname").Value;
  const lname = document.querySelector("#lname").Value;

  students.push(submitCreator(fname, lname));
});

document.querySelector("button").addEventListener("click", () => {
  console.log(students[2]);
  console.log(getRandomIntInclusive(1, 10));
});
