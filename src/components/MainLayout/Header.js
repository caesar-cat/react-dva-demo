import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

export default class Header extends React.Component {
  render() {
    return(
      <Menu
        selectedKeys={[this.props.location.pathname]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="/users">
          <Link to="/users"><Icon type="bars" />Users</Link>
        </Menu.Item>
        <Menu.Item key="/">
          <Link to="/"><Icon type="home" />Home</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
