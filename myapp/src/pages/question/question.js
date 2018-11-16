import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image} from '@tarojs/components'
import './question.scss'
// import { connect } from 'react-redux';

import headPortrait from '../../common/img/touxiang.jpg'

class Question extends Component {
  config = {
    navigationBarTitleText: '前辈详情'
  }
  constructor() {
    super(...arguments),
    state({
      list: []
    })
  }
  
  componentDidMount() {
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url: 'http://www.zhaoqianbei.com/api/Index/qianbeiDetail/rid/1'
    }).then( res => {
        Taro.hideLoading()
        if(res.data.ret_code === '1000') {
          this.setState({
            loading: false,
            list: res.data.data.data
          })
        }

    })
    console.log(3)
  }

  navigateTo(url) {
    Taro.navigateTo({url:url})
  }


  render() {
    console.log(2)
    return (
      <View className='present'>
      {/* <View onClick={this.hanDle.bind(this)}>222222222222222222</View> */}
      {/* <View><Text>{this.props.counter.num}</Text></View> */}
      {/* 老师部分 */}
          {/* <View className='teacher'>
              <View className='teacher-header'>
                  <Image className='teacher-head-img' src={headPortrait}></Image>
              </View>
              <View className='teacher-title'>
                <Text className='teacher-title-main'>{this.state.loading}123</Text><Text className='teacher-title-ad'>一本 30 四川省-成都市-双流区</Text>
              </View>
              <View className='teacher-message'>
                  <Text className=''>Motto: 我希望软件与程序能帮助更多人更高效的工作</Text>
              </View>
          </View> */}
        {/* 老师部分结束 */}
        <View className='experience-home'>
            <Text className='experience'>工作经历</Text>
            <View className='experience-main'>
               <View className='experience-left'>
                  <Text className='info'>任职公司:</Text>
                  <Text className='info'>职&&位:</Text>
                  <Text className='info'>技&&能:</Text>
                  <Text className='info'>入行时间:</Text>
               </View>
               <View className='experince-center'>
                  <Text className='introduce'>梦之门科技</Text>
                  <Text className='introduce'>软件工程师</Text>
                  <Text className='introduce'>WEb前端</Text>
                  <Text className='introduce'>2017-07-04 -- 至今</Text>
               </View>
            </View>
        </View>

        <View className='experience-home'>
            <Text className='experience'>教育经历</Text>
            <View className='experience-main'>
               <View className='experience-left'>
                  <Text className='info'>学校名称:</Text>
                  <Text className='info'>专业:</Text>
                  <Text className='info'>最高学历:</Text>
                  <Text className='info'>毕业时间:</Text>
               </View>
               <View className='experince-center'>
                  <Text className='introduce'>四川大学</Text>
                  <Text className='introduce'>数学与应用数学</Text>
                  <Text className='introduce'>一本</Text>
                  <Text className='introduce'>1970年 毕业</Text>
               </View>
            </View>
        </View>

        <View className='project'>
          <Text className='experience'>项目经验</Text>
          <View className='null'>
            <Text className='projectnull'>该前辈没有已做过的项目</Text>
          </View>
        </View>

        <View className='works'>
          <Text className='experience'>作品展示</Text>
          <View className='null'>
            <Text className='projectnull'>该前辈暂无作品展示</Text>
          </View>
        </View>
        
        <View className='experience-home'>
            <Text className='experience'>联系方式</Text>
            <View className='experience-main'>
               <View className='experience-left'>
                  <Text className='info'>手机:</Text>
                  <Text className='info'>QQ邮箱:</Text>

               </View>
               <View className='experince-center'>
                  <Text className='introduce'>........</Text>
                  <Text className='introduce'>123888368@qq.com</Text>
               </View>
            </View>
        </View>

        <View className='works'>
          <Text className='experience'>自我评价</Text>
          <View className='null'>
            <Text className='projectnull'>独立完成找前辈整个前后端，我能非常耐心和有趣的给大家讲解前端知识！</Text>
          </View>
        </View>
      </View>
    )
  }
}

const mapState = (state) => ({
  // showScroll: state.getIn(['home', 'showScroll'])
  // 取数据
 })

const mapDispatch = (dispatch) => ({
  // changeHomeDate() {
  //   dispatch(actionCreators.getHoneInfo());
  // },
  // changeScrollTopShow (e) {
  //   if ( document.documentElement.scrollTop > 100 ) {
  //     dispatch(actionCreators.toogleTopShow(true))
  //   }else {
  //     dispatch(actionCreators.toogleTopShow(false))
  //   }
  // }
  // 发送数据
})

export default connect(mapState, mapDispatch)(Question);