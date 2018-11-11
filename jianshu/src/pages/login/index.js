import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
    Loginwrapper,
    LoginBox,
    Iinput,
    Button
} from './style';

class Login extends PureComponent {
  render() {
    return (
      <Loginwrapper>
        <LoginBox>
            <Iinput placeholder="账号" />
            <Iinput placeholder="密码" />
            <Button>登录</Button>
        </LoginBox>
      </Loginwrapper>
    )
  }
}

export default connect(null, null)(Login);