import React from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import './ui.less'
export default class Loadings extends React.Component {
  render() {
    const icon = <Icon type="loading" style={{ fontSize: 24 }} />
    const iconLoading = <Icon type="loading" style={{ fontSize: 24 }} />
    return (
      <div>
        <Card title="Spin size" className="card-wrap">
          <Spin size="small" />
          <Spin style={{ margin: '0 10px' }} />
          <Spin size="large" />
          <Spin indicator={icon} style={{ marginLeft: 10 }} spinning={true} />
        </Card>
        <Card title="Inside  container" className="card-wrap">
          <Alert
            message="React"
            description="Welcome to AntD CMS"
            type="info"
            style={{ marginBottom: 10 }}
          />
          <Spin>
            <Alert
              message="React"
              description="Welcome to AntD CMS"
              type="warning"
              style={{ marginBottom: 10 }}
            />
          </Spin>
          <Spin tip="Loading...">
            <Alert
              message="React"
              description="Welcome to AntD CMS"
              type="warning"
              style={{ marginBottom: 10 }}
            />
          </Spin>
          <Spin indicator={iconLoading}>
            <Alert
              message="React"
              description="Welcome to AntD CMS"
              type="warning"
            />
          </Spin>
        </Card>
      </div>
    )
  }
}
