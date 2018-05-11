function myName(n) {
  console.log("Name: " + n);
}
myName("ARTHUR SCOTT");
function myCareer(c) {
  console.log("Career: " + c);
}
myCareer("Full Stack Engineer/Developer");
function myDescription(d) {
  console.log("Description: " + d);
}
myDescription("I like basketball");

console.log("");

var interests = ["Sports", "Cars", "Food", "Music"];

function myInterests() {
  console.log("My Interests:");
  for (let i = 0; i < interests.length; i++) {
    console.log(interests[i]);
  }
  console.log("");
}
myInterests();

console.log("My Previous Experience:");
function displayPosition(job, comp, desc) {
  console.log(job + " at " + comp + " - " + desc);
}
displayPosition("Math Tutor", "Ramsay High School", "Tutored students");
displayPosition(
  "Undergraduate Teaching Assistant",
  "University of Georgia",
  "Assisted Instructors in class"
);
displayPosition(
  "Database Administrator",
  "Bank of America",
  "Administered Databases"
);

console.log("");

var skills2 = [
  {
    skill: "TypeScript",
    isCool: true
  },
  {
    skill: "French",
    isCool: false
  },
  {
    skill: "Java",
    isCool: false
  },
  {
    skill: "Scrum",
    isCool: true
  },
  {
    skill: "Painting",
    isCool: true
  },
  {
    skill: "Python",
    isCool: false
  }
];

console.log("My Skills:");
function displaySkill(s, c) {
  if (c == true) {
    console.log("BAM: " + s);
  } else {
    console.log(s);
  }
}
for (let i = 0; i < skills2.length; i++) {
  displaySkill(skills2[i].skill, skills2[i].isCool);
}
