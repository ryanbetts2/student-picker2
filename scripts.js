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

const p = document.querySelector("p");
const studentCreator = (fname, lname) => {
  // object
  const student = {
    fname,
    lname
  };

  return student;
};

const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  const fname = document.querySelector("#fname").Value;
  const lname = document.querySelector("#lname").Value;

  students.push(studentCreator(fname, lname));
});

document.querySelector("button").addEventListener("click", () => {
  const chosen1 = students[getRandomIntInclusive(0, students.length - 1)];

  p.textContent = `And the lucky student is:  ${chosen1.fname} ${
    chosen1.lname
  }`;
  p.classList.remove("is-hidden");
  p.classList.add("bounce");
});
