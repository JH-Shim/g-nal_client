import SHA256 from './SHA256';

// ! 사용 예시 onClick={reverseBoolean.bind(this, 'isPasswordShow')}
const reverseBoolean = function (ele) {
  this.setState({ [ele]: !this.state[ele] });
};

// ! 사용 예시 onChange={handleInputValue.call(this, 'userId')}
const handleInputValue = function (state) {
  return (e) => {
    this.setState({ [state]: e.target.value });
  };
};

// ! 사용 예시 onChange={handleFileUpload.bind(this)}
const handleFileUpload = function (e) {
  this.setState({ file: e.target.files[0] });
  // console.log(this.state.file); // ! check setState도 비동기
};

// ! 사용 예시 onChange={handleInputValueSHA256.call(this, 'password')}
const handleInputValueSHA256 = function (state) {
  return (e) => {
    this.setState({
      [state]: SHA256(e.target.value + process.env.REACT_APP_PASSWORD_HASH_KEY),
    });
  };
};

// ! 사용 예시 onKeyDown={() => handleKeyDown('Enter', this.handleSignUp)}
// ! 주로 tabIndex="0" 과 함께 쓰인다.
const handleKeyDown = function (key, func) {
  return (e) => {
    if (e.key === key) {
      func();
    }
  };
};

export {
  reverseBoolean,
  handleInputValue,
  handleFileUpload,
  handleInputValueSHA256,
  handleKeyDown,
};
