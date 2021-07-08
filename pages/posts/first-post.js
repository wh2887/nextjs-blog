import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>第一篇博客</title>
            </Head>
            <h1>第一篇博客</h1>
            {/* <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2> */}
        </Layout>
    )
}