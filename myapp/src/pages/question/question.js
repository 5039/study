import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image} from '@tarojs/components'
import './question.scss'

import headPortrait from '../../common/img/touxiang.jpg'

class Question extends Component {
  config = {
    navigationBarTitleText: '前辈详情'
  }
  constructor() {
    super(...arguments)
  }
  navigateTo(url) {
    Taro.navigateTo({url:url})
  }
  render( ) {
    return (
      <View className='present'>
      {/* 老师部分 */}
          <View className='teacher'>
              <View className='teacher-header'>
                  <Image className='teacher-head-img' src={headPortrait}></Image>
              </View>
              <View className='teacher-title'>
                  <Text className='teacher-title-main'>刘老师</Text><Text className='teacher-title-ad'>一本 30 四川省-成都市-双流区</Text>
              </View>
              <View className='teacher-message'>
                  <Text className=''>Motto: 我希望软件与程序能帮助更多人更高效的工作</Text>
              </View>
          </View>
        {/* 老师部分结束 */}
        <View>
            <Text className='experience'>工作经历</Text>
        </View>
      </View>
    )
  }
}

export default Question;