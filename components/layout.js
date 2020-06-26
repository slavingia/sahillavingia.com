import React from 'react'
import styles from './layout.module.css'
import { initGA, logPageView } from './analytics'

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  render () {
    return <div className={styles.container}>{this.props.children}</div>
  }
}