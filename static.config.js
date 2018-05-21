const React = require('react')
const fs = require('fs')
const path = require('path')
const showdown = require('showdown')
const fm = require('front-matter')

const converter = new showdown.Converter()


function getWebsiteData () {
  return new Promise(resolve => {
    fs.readFile(path.join(__dirname, 'content', 'data.md'), 'utf8', (err, text) => {
      const frontmattered = fm(text)
      frontmattered.body = converter.makeHtml(frontmattered.body)
      resolve(frontmattered)
    })
  })
}

export default {
  getSiteData: () => ({
    title: 'React Static with Netlify CMS',
  }),
  getRoutes: async () => {
    const websiteData = await getWebsiteData()
    return [
      {
        path: '/',
        component: 'src/Home',
        getData: () => ({
          websiteData,
        }),
      },
    ]
  },
  Document: ({
    Html, Head, Body, children, renderMeta,
  }) => (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, shrink-to-fit=no, user-scalable=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#c2aa94" />
        <meta name="msapplication-TileColor" content="#c2aa94" />
        <meta name="theme-color" content="#c2aa94" />
        <title>Susanne Dannhauer - Ihr Guter Faden</title>
        <meta name="description" content="Ihr Guter Faden - Sasanne Dannhauer." />
        <meta name="keywords" content="Susanne Dannhauer" />
        <meta property="og:title" content="Ihr guter Faden" />
        <meta property="og:site_name" content="Ihr guter Faden" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ihrguterfaden.de" />
        <meta property="og:description" content="Ihr Guter Faden - Sasanne Dannhauer." />
        <meta property="og:image" content="https://ihrguterfaden.de/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        <meta name="theme-color" content="#ffffff" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" rel="stylesheet" />
        {renderMeta.styleTags}
      </Head>
      <Body>{children}</Body>
      <script
        src="//code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
        crossOrigin="anonymous" />
      <script src="//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" />
      <script dangerouslySetInnerHTML={{
        __html: `
        window.executeSlick = () => {
          $('.slide').show();
          $('.slideshow').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
          }); 
        }
        if (window.mounted) {
          window.executeSlick();
        }
      `}} />
    </Html>
  ),
}
