import React from 'react';
import styles from './MainLayout.css';
import Header from './Header';

export default class MainLayout extends React.Component{
  render() {
    return(
      <div className={styles.normal}>
        <Header location={this.props.location} />
        <div className={styles.content}>
          <div className={styles.main}>
            {this.props.children? this.props.children: ''}
          </div>
        </div>
      </div>
    )
  }
}

