import React from 'react'
import Layout from '../components/layout'
import styles from '../components/blog.module.css'


const blog = () => {
    return (
       <Layout>
           <div className={styles.page}>
       <h1>my blog</h1>
       <p className={styles.text}>
           first article
       </p>
       </div>
       </Layout>
           
    )
}

export default blog
