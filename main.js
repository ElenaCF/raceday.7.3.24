let raceNumber = Math.floor(Math.random() * 1000);
let timeRegistration = "False";
const runnerAge = "18";
let raceTime = ''

if (runnerAge > 18 && timeRegistration) {
  raceNumber += 1000;
} else if (!runnerAge > 18 && timeRegistration) {
  raceNumber += 1000;
} else if (runnerAge < 18) {
  raceNumber += 1000;
} else {
  raceNumber += 1000;
}

if (runnerAge > 18 && timeRegistration) {
  raceTime = '9:30 AM';
} else if (!runnerAge > 18 && timeRegistration) {
  raceTime = '11:00 AM';
} else if (runnerAge < 18) {
  raceTime = '12:30 PM';
} else {
  raceTime = 'an invalid time. Please see the registration desk for more information'
}

console.log(
  `You will be begin racing at ${raceTime}. Your number is ${raceNumber}.`
);
