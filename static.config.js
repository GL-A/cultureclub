const fs = require('fs')
const klaw = require('klaw')
const path = require('path')
const matter = require('gray-matter')
import React, { Component } from 'react'

function getShirts () {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync('./src/shirts')) {
      klaw('./src/shirts')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Create slug for URL //
            dataObj.data.slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // posts = items for below routes //
          resolve(items)
        })
    } else {
      // If src/posts directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}
function getPosts () {
  const items = []
  // Walk ("klaw") through posts directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if posts directory exists //
    if (fs.existsSync('./src/posts')) {
      klaw('./src/posts')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Create slug for URL //
            dataObj.data.slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // posts = items for below routes //
          resolve(items)
        })
    } else {
      // If src/posts directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

export default {

  getSiteData: () => ({
    title: 'React Static with Netlify CMS',
  }),
  getRoutes: async () => {
       const posts = await getPosts()
       const shirts = await getShirts()

    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          shirts,
        }),
        children: shirts.map(shirt => ({
          path: `/product/${shirt.data.slug}`,
          component: 'src/containers/Product',
          getData: () => ({
            shirt,
            shirts,
            route: `/product/${shirt.data.slug}`
          })
        }))
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/products',
        component: 'src/containers/Products'
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.data.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            {renderMeta.styleTags}
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
            <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
            <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="MWJiZjg5NDQtOTQ4NC00MmRkLTljMzQtNWI4NWFhOGRlMmQ2NjM2ODA3NzcxODA4MjQ4Nzk5"></script>

          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
  // Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
  //   <Html lang="en-US">
  //     <Head>
  //       <meta charSet="UTF-8" />
  //       <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
  //       <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
  //       <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key="MWJiZjg5NDQtOTQ4NC00MmRkLTljMzQtNWI4NWFhOGRlMmQ2NjM2ODA3NzcxODA4MjQ4Nzk5"></script>

  //     </Head>
  //     <Body>{children}</Body>
  //   </Html>
  // )
}
