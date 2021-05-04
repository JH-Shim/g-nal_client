const reverseBoolean = function (ele) {
  this.setState({ [ele]: !this.state[ele] });
};

const handleInputValue = function (state) {
  return (e) => {
    this.setState({ [state]: e.target.value });
  };
};

export { reverseBoolean, handleInputValue };
