import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

// Styling
import '../styles/index.scss'

const metaData = {
  name: 'Assignment boilerplate',
  description: 'This is a Assignment boilerplate'
}

function MyApp({ Component, pageProps }) {
  const { name, description } = metaData

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon32-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-config" content="favicons/browserconfig.xml" />
      </Head>
      <NextSeo
        title={name}
        description={description}
        openGraph={{
          url: 'https://www.yummygum.com',
          title: name,
          description,
          images: [
            {
              url: '/favicons/meta-img.png',
              alt: 'Assignment boilerplate'
            }
          ],
          site_name: name,
        }}
        twitter={{
          handle: '@yummygum',
          site: '@yummygum',
          cardType: 'summary_large_image'
        }}
      />

      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}

export default MyApp
