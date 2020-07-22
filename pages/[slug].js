import * as React from 'react'

export default function Page({ jsonFile }) {
    const formConfig = {
        fields: [
          {
            name: 'title',
            label: 'Post Title',
            component: 'text',
          },
        ],
      }
    
      const [post, form] = useJsonForm(jsonFile, formConfig)
    
      usePlugin(form)
    
      return (
        <>
          <h1>{post.title}</h1>
        </>
      )
    }

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const content = await import(`../../posts/${slug}.json`)

  return {
    props: {
      jsonFile: {
        fileRelativePath: `/posts/${slug}.json`,
        data: content.default,
      },
    },
  }
}

export async function getStaticPaths() {
  //get all .json files in the posts dir
  const posts = glob.sync('posts/**/*.json')

  //remove path and extension to leave filename only
  const postSlugs = posts.map(file =>
    file
      .split('/')[2]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  // create paths with `slug` param
  const paths = postSlugs.map(slug => `/blog/${slug}`)
  return {
    paths,
    fallback: true,
  }
}