import React from 'react'
import { Card, Button, notification } from 'antd'
import './ui.less'
export default class Notifications extends React.Component {
  openNotification = (type, direction) => {
    if (direction) {
      notification.config({
        placement: direction
      })
    }
    notification[type]({
      message: 'Validation',
      description: 'Please validate before saving'
    })
  }

  render() {
    return (
      <div>
        <Card title="Notification" className="card-wrap">
          <Button
            type="primary"
            onClick={() => this.openNotification('success')}
          >
            Success
          </Button>
          <Button type="primary" onClick={() => this.openNotification('info')}>
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification('warning')}
          >
            Warning
          </Button>
          <Button type="primary" onClick={() => this.openNotification('error')}>
            Error
          </Button>
        </Card>
        <Card title="Notification" className="card-wrap">
          <Button
            type="primary"
            onClick={() => this.openNotification('success', 'topRight')}
          >
            Success
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification('info', 'topRight')}
          >
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification('warning', 'topRight')}
          >
            Warning
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification('error', 'topRight')}
          >
            Error
          </Button>
        </Card>
      </div>
    )
  }
}
