export const validator = {
  email: /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,8})(\.[A-Za-z]{2,8})?$/,
  password: /^[#\w@_$!%^&*()+=~`-]{8,20}$/,
};

export const isValidEmail = value => {
  return validator.email.test(value);
};

export const isValidPassword = value => {
  return validator.password.test(value);
};
