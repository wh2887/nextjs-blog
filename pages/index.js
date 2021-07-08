import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>recording...</p>
        <p>
          冀求平凡，但却被挡在最外面的边界。
        </p>
      </section>
    </Layout>
  )
}