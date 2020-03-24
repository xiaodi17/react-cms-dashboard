import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
export default class Header extends React.Component {
  componentWillMount() {
    this.setState({
      userName: 'David'
    })
    setInterval(() => {
      let sysTime = Util.formatDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000)
    this.getWeatherAPIData()
  }

  getWeatherAPIData() {
    let city = 'Brisbane'
    let APIKEY = process.env.REACT_APP_WEATHER_API
    console.log(APIKEY)
    axios
      .jsonp({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`
      })
      .then(res => {
        if (res.cod === 200) {
          let data = res.weather[0]
          console.log(data)
          this.setState({
            dayPictureUrl: `http://openweathermap.org/img/wn/${data.icon}@2x.png`,
            weather: data.description
          })
          console.log(this.state.dayPictureUrl)
        }
      })
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>Welcome, {this.state.userName}</span>
            <a href="/#">Exit</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col className="breadcrumb-title" span={4}>
            Home
          </Col>
          <Col className="weather" span={20}>
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt="" />
            </span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    )
  }
}
