import Toast from 'react-native-root-toast';

// convert a set of strings separated by space
// into a case sentence
export const sentenceCase = str => {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

export const toastOptions = {
  duration: Toast.durations.SHORT,
  position: Toast.positions.BOTTOM,
  shadow: false,
  animation: true,
  backgroundColor: 'rgba(0,0,0,0.95)',
};

export const errorMessage = {
  EMAIL_INVALID: 'Enter a valid email address',
  PASSWORD_TOO_SHORT: 'Enter a password longer than 8 text',
};
