const CheckEmail = (value) => {
  return value.match(/.+@{1}.+\.{1}(\w{4}|\w{3}|\w{2})|./g).length == 1 ? true : false;
};
export default CheckEmail;
