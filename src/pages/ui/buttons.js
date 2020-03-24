import React from 'react'
import { Card, Button, Radio } from 'antd'
import './ui.less'
export default class Buttons extends React.Component {
  state = {
    loading: true,
    size: 'default'
  }

  handleCloseLoading = () => {
    this.setState({
      loading: false
    })
  }

  handleChange = e => {
    this.setState({
      size: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Card title="Primary" className="card-wrap">
          <Button type="primary">AntD</Button>
          <Button>AntD</Button>
          <Button type="dashed">AntD</Button>
          <Button type="danger">AntD</Button>
          <Button disabled>AntD</Button>
        </Card>
        <Card title="Default" className="card-wrap">
          <Button icon="plus">New</Button>
          <Button icon="edit">Edit</Button>
          <Button icon="delete">Delete</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">
            Search
          </Button>
          <Button type="primary" icon="download">
            Download
          </Button>
        </Card>
        <Card title="Loading" className="card-wrap">
          <Button type="primary" loading={this.state.loading}>
            OK
          </Button>
          <Button
            type="primary"
            shape="circle"
            loading={this.state.loading}
          ></Button>
          <Button loading={this.state.loading}>Loading</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>
            Close
          </Button>
        </Card>
        <Card title="Link" style={{ marginBottom: 10 }}>
          <Button.Group>
            <Button type="primary" icon="left">
              Back
            </Button>
            <Button type="primary" icon="right">
              Forward
            </Button>
          </Button.Group>
        </Card>
        <Card title="Size" className="card-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">small</Radio>
            <Radio value="default">mid</Radio>
            <Radio value="large">large</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>
            AntD
          </Button>
          <Button size={this.state.size}>Imooc</Button>
          <Button type="dashed" size={this.state.size}>
            AntD
          </Button>
          <Button type="danger" size={this.state.size}>
            AntD
          </Button>
        </Card>
      </div>
    )
  }
}
