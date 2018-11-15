import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, Navigator  } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtButton  } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '主页'
  }

  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (value) {
    this.setState({ 
      current: value
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const tabList = [{ title: 'PHP' }, { title: 'web前端' }, { title: 'Java' }, { title: 'Pyhon' }, { title: '.NET' }, { title: 'C++' }, { title: 'Node.js' }]
    const imgtit = 'http://thirdwx.qlogo.cn/mmopen/vi_32/fOEGgNBwPINyk0oWJ1mTYmDYMBttPEqnCushcaZXBiagxZM2heEnxyXwGiansCtp6BlkSeiaZbpr09a34U4e3wCTg/132'
    return (
      <View>
        <AtTabs className='NavItemList' scroll current= {this.state.current} tabList={tabList} onClick={this.handleClick}>
          <AtTabsPane className='index-top' current={this.state.current} indext={1}>
          <View className='Explain'>
              <View className='at-row at-row__justify--between'>
                <View className='Explain-left at-col at-col-5'>
                  <Text className='Explain_word'>原价：10000.00元</Text>
                  <Text className='Explain_word'>班级大小：一对一</Text>
              </View>
                <View className='Explain-right at-col at-col-5'>
                  <Text className='Explain_word rate'>优惠价：10000.00元</Text>
                  <Text className='Explain_word'>学习周期：3个月左右</Text>
              </View>
            </View>

            <View>
                <Text className='Explain_info'>前端目前发展势头强劲，随着前端新技术和方案的发布，前端既有着广阔的应用前景，也有着丰富的实施方案。当然，前端相对后端，入行门槛低，但学习量大，行业要求不统一。我们平台提供一对一教学，以项目练习为主，行业从业者带你入行。</Text>
            </View>
          </View>
          
          <View className='Itemlist'>
              <View className='ItemlistLeft'>
                <Navigator target='index'>
                  <View className='Itemlist_Info'>
                    <Image className='Itemlist_Info_img' src={imgtit}></Image>
                    <Text className='Itemlist_Info_title'>Haocker</Text>
                    <Text className='Itemlist_Info_job'>成都微致汇网络科技有限公司</Text>
                     <View className='itemsfont'><Text>已带1人 </Text>|<Text>在带1人 </Text>|<Text>暂无评价 </Text></View>
                    <Text className='Itemlist_Info_ction'>多年Java开发，熟悉各种模式下的Java开发应用。</Text>
                  </View>
                </Navigator>
              </View>

              <View className='ItemlistRight'>
                <Button type='primary' className='Itembtn-max' size='mini'>拜师</Button>
              </View>
          </View>
          </AtTabsPane>
        </AtTabs>

      </View>
    )
  }
}

