/**
 * 1. LISTEN for and HANDLE the 'submit' event.

 */
const students = [
  { fname: " Ryan", lname: "Bettss" },
  { fname: " Bill", lname: "Bett" },
  { fname: " Dill", lname: "Bets" },
  { fname: " Will", lname: "Bts" },
  { fname: " Phil", lname: "Btts" }
];

const studentCreator = (fname, lname) => {
  // object
  const student = {
    fname,
    lname
  };

  return student;
};
// function getRandomIntInclusive(min, max) {
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  const fname = document.querySelector("#fname").Value;
  const lname = document.querySelector("#lname").Value;

  students.push(studentCreator(fname, lname));
});

document.querySelector("button").addEventListener("click", () => {
  // const randomIndex = getRandomIntInclusive(0, students.length - 1);
  // const chosen1 = students[randomIndex];
  console.log(students[getRandomIntInclusive(0, students.length - 1)]);
  // console.log(getRandomIntInclusive(1, 10));
});
