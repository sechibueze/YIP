
const hasMaxLength = (value, maxLength = 6) => {
  return value.length <= maxLength;
};

const hasMinLength = (value, minLength = 6) => {
  return value.length >= minLength;
};

const isNotEmpty = value => {
  return value.trim() !== '' && value.trim().length > 0;
};

const isValidString = value => hasMinLength(value) && isNotEmpty(value)