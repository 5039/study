import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    margin-top: 30px;
    width: 625px;
    .banner-img {
      width: 625px;
      height: 270px;
    }
`

export const HomeRight = styled.div`
    width: 240px;
    float: right;
`


// Topic
export const TopicWrapper = styled.div `
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div `
    float: left;
    margin-top: 10px;
    margin-left: 18px;
    padding-right: 10px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .Topic-img {
      width: 32px;
      height: 32px;
      display: block;
      float: left;
      margin-right: 10px;
    }
`

//List 
export const ListItem = styled.div `
padding: 20px 0;
overflow: hidden;
border-bottom: 1px solid #dcdcdc;
.listpic {
  width: 125px;
  height: 100px;
  float: right;
  border-radius: 10px;
}
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .listtitle {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .listdesc {
    line-height: 24px;
    font-size: 12px;
    color: #999;
  }
`

// LoadMore
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`


export const Backtop = styled.div `
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 10px;
  border: 1px solid #ccc;
`