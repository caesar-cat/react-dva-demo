import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import PropTypes from 'prop-types';
import { routerRedux } from 'dva/router';
import queryString from 'query-string';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';
import UserModal from './UserModal';

export default class Users extends React.Component{

  static propTypes = {
    loading: PropTypes.bool,
    list: PropTypes.array,
    total: PropTypes.number,
    page: PropTypes.number
  }
  
  constructor(props) {
    super(props)
    this.dispatch =  this.props.dispatch
  }

  createHandler(values) {
    this.dispatch({
      type: 'users/create',
      payload: values,
    });
  }

  deleteHandler(id) {
    this.dispatch({
      type: 'users/remove',
      payload: id,
    });
  }

  pageChangeHandler(page) {
    this.dispatch(routerRedux.push({
      pathname: '/users/list',
      search: queryString.stringify({ page }),
    }));
  }

  editHandler(id, values) {
    this.dispatch({
      type: 'users/patch',
      payload: { id, values }
    });
  }

  render() {
    let { list: dataSource, loading, total, page: current } = this.props
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="">{text}</a>,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
      },
      {
        title: 'Operation',
        key: 'operation',
        render: (text, record) => (
          <span className={styles.operation}>
            <UserModal record={record} onOk={this.editHandler.bind(this, record.id)}>
              <a>Edit</a>
            </UserModal>
            <Popconfirm title="Confirm to delete?" onConfirm={this.deleteHandler.bind(this, record.id)}>
              <a href="">Delete</a>
            </Popconfirm>
          </span>
        )
      }
    ];
    
    return (
      <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <UserModal record={{}} onOk={this.createHandler.bind(this)}>
            <Button type="primary">Create User</Button>
          </UserModal>
        </div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={this.pageChangeHandler.bind(this)}
        />
      </div>
    </div>
    )
  }
}

