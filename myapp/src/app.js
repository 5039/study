import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import Question from './pages/question/question'
import { Provider } from 'react-redux'
import store from './store'

import './app.scss'
if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}

class App extends Component {
  config = {
    pages: [
      // 主页
      // 'pages/index/index',
      'pages/question/question'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#6F9AEA',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {/* //<Index /> */}
        <Question />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
