import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';

@connect()
export default class Users extends React.Component{
  render() {
    console.log(this.props)
    let { location } = this.props
    return (
      <MainLayout location={location}>
        <div className={styles.normal}>
          <UsersComponent />
        </div>
      </MainLayout>
    )
  }
}

