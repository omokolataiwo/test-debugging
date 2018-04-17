const OX = inputStr => {
  // Don't do anything for non string
  if (typeof inputStr !== 'string') return true;

  let output = 0;
  inputStr.split('').forEach(letter => {
    // Convert all letters to lower case
    letter = letter.toLowerCase();
    if (letter === 'x') output += 1;
    else if (letter === 'o') output -= 1;
  });
  return output === 0;
};
export default OX;
