import React from 'react';
// import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router'; // ! check withRouter
import axios from 'axios';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
    };
  }

  handleInputValue = (state) => (e) => {
    this.setState({ [state]: e.target.value }); // ! check VS SignUp(modules)
  };

  handleSignup = () => {
    const { userId, password } = this.state;
    axios
      .post(`${process.env.REACT_APP_SERVER_DOMAIN}/accounts/signin`, {
        userId: userId,
        password: password,
      })
      .then((res) => {
        this.props.history.push('/'); // ! check
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="rem35 container_grid center_grid bg_contrast">
        <div className="container_flex_column center_div_res_container">
          <div className="signin_up flex80 container_flex_column">
            <div className="flex10"></div>
            <div className="flex10 container_padding">
              <input
                className="hw100"
                placeholder="아이디"
                onChange={this.handleInputValue('userId')}
              ></input>
            </div>
            <div className="flex10 container_padding">
              <input
                className="hw100"
                placeholder="비밀번호"
                type="password"
                onChange={this.handleInputValue('password')}
              ></input>
            </div>
            <div className="flex10 container_padding">
              <div className="hw100 bg_eee container_grid center_grid pointer">
                로그인
              </div>
            </div>
          </div>
          <div
            className="signin_down flex20 container_grid center_grid"
            onClick={() => {
              this.props.history.push('/accounts/signup');
            }}
          >
            가입하기
          </div>
        </div>
      </div>
    );
  }
}

// function SignIn({}) {
//   const history = useHistory();

//   return (
//     <div className="rem35 container_grid center_grid bg_contrast">
//       <div className="container_flex_column center_div_res_container">
//         <div className="signin_up flex80 container_flex_column">
//           <div className="flex10"></div>
//           <div className="flex10 container_padding">
//             <input className="hw100" placeholder="아이디"></input>
//           </div>
//           <div className="flex10 container_padding">
//             <input
//               className="hw100"
//               placeholder="비밀번호"
//               type="password"
//             ></input>
//           </div>
//           <div className="flex10 container_padding">
//             <div className="hw100 bg_eee container_grid center_grid pointer">
//               로그인
//             </div>
//           </div>
//         </div>
//         <div
//           className="signin_down flex20 container_grid center_grid"
//           onClick={() => {
//             history.push('/accounts/signup');
//           }}
//         >
//           가입하기
//         </div>
//       </div>
//     </div>
//   );
// }

export default withRouter(SignIn);
