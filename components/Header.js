import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Navigation from './Navigation';

NProgress.configure({
    showSpinner: false
});
Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const linkStyle = {
    margin: '0 10px 0 0'
}

export default props => (
    <div>
        <Head>
            <title>Hmm... 🤔</title>
            <meta charSet='utf-8' />

            <link href="/static/normalize.css" rel="stylesheet" />
            <link href="/static/blueprint.css" rel="stylesheet" />
            <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
            <link rel='stylesheet' type='text/css' href='/static/styles.css' />
        </Head>
        <Navigation {...props} />
    </div>
)