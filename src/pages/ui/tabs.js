import React from 'react'
import { Card, Button, Tabs, message, Icon } from 'antd'
import './ui.less'
const TabPane = Tabs.TabPane

export default class Tab extends React.Component {
  handleCallback = key => {
    message.info('Hi, this is tab：' + key)
  }
  render() {
    return (
      <div>
        <Card title="Tabs" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tabs with logo" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane
              tab={
                <span>
                  <Icon type="plus" />
                  Tab 1
                </span>
              }
              key="1"
            >
              Content of Tab Pane 1
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="edit" />
                  Tab 2
                </span>
              }
              key="2"
            >
              Content of Tab Pane 2
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="delete" />
                  Tab 3
                </span>
              }
              key="3"
            >
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
}
