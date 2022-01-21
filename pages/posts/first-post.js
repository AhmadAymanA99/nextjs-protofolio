import Head from 'next/head'
import Link from 'next/link'
//import Script from 'next/script'
import Layout from '../../components/layout'


export default function FirstPost () {
    return (
        <Layout>
            <Head>
                <title>Posts | First Post</title>
            </Head>
            <main>
                <h1 className="title">First Post
                    <div className="description">
                        
                    </div>
                </h1>
            </main>
        </Layout>
        )
}