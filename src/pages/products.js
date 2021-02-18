import React, { Component } from 'react'
import Layout from '../components/layout'
import styles from '../components/products.module.css'
console.log(styles)

export default class products extends Component {
    render() {
        return (
            <Layout>
                <div className={styles.page}>
                <h1>this is our products page</h1>
                <p className={styles.text}>
           first article
       </p>
       </div>
            </Layout>
        )
    }
}
