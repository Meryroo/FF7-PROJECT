const CheckEmail = (value) => {
  return value.match(/\w+@{1}\w+\.{1}(\w{4}|\w{3}|\w{2})|./g).length == 1 ? true : false;
};
export default CheckEmail;
