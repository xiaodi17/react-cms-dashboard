import React from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.less'
export default class Buttons extends React.Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }

  //dont write if else statement here
  handleOpen = type => {
    this.setState({
      [type]: true //pass param dynamically
    })
  }

  handleConfirm = type => {
    //Model.type() === Modal[type]
    Modal[type]({
      title: 'AntD',
      content: 'Do you want to close this modal?',
      onOk() {
        console.log('Ok')
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }
  render() {
    return (
      <div>
        <Card title="Modal" className="card-wrap">
          <Button type="primary" onClick={() => this.handleOpen('showModal1')}>
            Open
          </Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>
            Customized
          </Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal3')}>
            20px to Top
          </Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal4')}>
            Vertically Centered
          </Button>
        </Card>
        <Card title="Confirm" className="card-wrap">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>
            Confirm
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>
            Success
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>
            Warning
          </Button>
        </Card>
        <Modal
          title="React"
          visible={this.state.showModal1}
          onCancel={() => {
            this.setState({
              showModal1: false
            })
          }}
        >
          <p>Welcome to AntD CMS</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.showModal2}
          okText="OK"
          cancelText="Cancel"
          onCancel={() => {
            this.setState({
              showModal2: false
            })
          }}
        >
          <p>Welcome to AntD CMS</p>
        </Modal>
        <Modal
          title="React"
          style={{ top: 20 }}
          visible={this.state.showModal3}
          onCancel={() => {
            this.setState({
              showModal3: false
            })
          }}
        >
          <p>Welcome to AntD CMS</p>
        </Modal>
        <Modal
          title="React"
          wrapClassName="vertical-center-modal"
          visible={this.state.showModal4}
          onCancel={() => {
            this.setState({
              showModal4: false
            })
          }}
        >
          <p>Welcome to AntD CMS</p>
        </Modal>
      </div>
    )
  }
}
