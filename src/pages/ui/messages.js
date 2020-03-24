import React from 'react'
import { Card, Button, message } from 'antd'
import './ui.less'
export default class Messages extends React.Component {
  showMessage = type => {
    message[type]('Update Successful')
  }

  render() {
    return (
      <div>
        <Card title="Normal prompt" className="card-wrap">
          <Button type="primary" onClick={() => this.showMessage('success')}>
            Success
          </Button>
          <Button type="primary" onClick={() => this.showMessage('info')}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.showMessage('warning')}>
            Warning
          </Button>
          <Button type="primary" onClick={() => this.showMessage('error')}>
            Error
          </Button>
          <Button type="primary" onClick={() => this.showMessage('loading')}>
            Loading
          </Button>
        </Card>
      </div>
    )
  }
}
