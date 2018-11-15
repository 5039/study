import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image} from '@tarojs/components'

class Question extends Component {
  config = {
    navigationBarTitleText: '问题'
  }
  constructor() {
    super(...arguments)
  }
  navigateTo(url) {
    Taro.navigateTo({url:url})
  }
  render( ) {
    return (
      <Text>Question</Text>
    )
  }
}

export default Question;