import React, { useState } from 'react'
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

function SidebarContent () {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="title">
        <Icon type="dashboard" /> 
        <span style={{marginLeft: '1em'}}>Dashboard</span>
      </div>

      <Menu defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="calendar" />
          <span>Calendar</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="unordered-list" />
          <span>Plan Tasks</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="carry-out" />
          <span>Completed / Incompleted</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="area-chart" />
          <span>Reports</span>
        </Menu.Item>
      </Menu>
    </Sider>
    
  )
}

export default SidebarContent


