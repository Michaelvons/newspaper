import Toast from 'react-native-root-toast';
import moment from 'moment';

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

export const formatTime = timestamp => {
  return moment.unix(timestamp).format('LL').toUpperCase();
};

export const getAuthor = string => {
  return string !== undefined ? string.toUpperCase() : 'ANONYMOUS USER';
};

export const getComments = array => {
  return array !== undefined ? array.length : 0;
};

export const sanitizeComment = text => {
  return text !== undefined
    ? text
        .replace(/<[^>]*>/g, ' ')
        .replace(/(&#x27;)/g, "'")
        .replace(/(&#x2F;)/g, '/')
        .replace(/(&gt;)/g, '>')
        .replace(/(&quot;)/g, '"')
    : 'Comment Not Available';
};

export const randomKey = () => {
  return Math.floor(Math.random() * 10000);
};
