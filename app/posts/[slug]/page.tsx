import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import ImageViewer from '@/components/ImageViewer'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: any) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (post) return { title: post.title };
  return { title: "err" }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) return;
  const Content = getMDXComponent(post.body.code)

  return (
    <article className="markdown-body">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1>{post.title}</h1>
      </div>
      <Content components={{ImageViewer}}/>
    </article>
  )
}

export default PostLayout
