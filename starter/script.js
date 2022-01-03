'use strict';

const currentYear = getYear();

const calcAge = birthYear => {
  const age = currentYear - birthYear;
  return age;
};

c(calcAge(1959));
