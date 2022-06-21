function arrayRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

function randomLowerCase() {
  return arrayRandom([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]);
}

function randomUpperCase() {
  return randomLowerCase().toUpperCase();
}

function randomNumber() {
  return arrayRandom(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
}

function randomSymbol() {
  return arrayRandom([
    '#',
    '!',
    '$',
    '_',
    '-',
    '~',
    '+',
    '{',
    '}',
    '[',
    ']',
    '/',
    '\\',
    '@',
    '=',
    '^',
    '%',
    '*',
    ':',
    ';',
    ',',
    '?',
    '&',
    "'",
  ]);
}

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('pass-length');
  const label = document.getElementById('pass-length-display');

  label.textContent = slider.value;

  slider.addEventListener('input', () => {
    label.textContent = slider.value;
    refreshPassword();
  });

  refreshPassword();
});

function refreshPassword() {
  const slider = document.getElementById('pass-length');
  const output = document.getElementById('password-output');

  output.textContent = generatePassword(slider.value);
}

function generatePassword(length) {
  let pass = 'OOPS ITS NOT WORKING';

  return pass;
}
