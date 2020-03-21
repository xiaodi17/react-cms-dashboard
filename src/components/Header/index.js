import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../utils/utils'
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
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>Welcome, {this.state.userName}</span>
            <a href="/#">Exit</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col className="breadcrumb-title" span="4">
            Home
          </Col>
          <Col className="weather" span="20">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">Storm</span>
          </Col>
        </Row>
      </div>
    )
  }
}
