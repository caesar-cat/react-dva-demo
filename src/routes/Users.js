import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import styles from './Users.css';
import UsersComponent from '../components/Users/Users';
import PageHeaderLayout from '../layouts/PageHeaderLayout';

@connect(state => ({
  loading: state.loading.models.users,
  list: state.users.list,
  total: state.users.total,
  page: state.users.page
}))

export default class Users extends React.Component{
  render() {
    let { location } = this.props
    return (
      <PageHeaderLayout>
        <Row gutter={24}>
          <Col xl={24} lg={24} md={24} sm={24} xs={24}>
            <UsersComponent {...this.props}/>
          </Col>
        </Row>
      </PageHeaderLayout>
    )
  }
}

