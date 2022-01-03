'use strict';

const currentYear = getYear();
const firstName = 'Oscar';

const calcAge = birthYear => {
  const age = currentYear - birthYear;

  const printAge = () => {
    const output = `You are ${age} and born in ${birthYear}.`;
    c(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      c(`You're a millennia!`);
      const firstName = 'Steven';
      c(firstName);
    } else {
      c(`You're NOT a millennial!`);
    }
    const add = (a, b) => a + b;
    add(5, 7);

    c(add(4, 8));
  };
  printAge();
  c(firstName);
  return age;
};

c(calcAge(1985));
