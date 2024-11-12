import React, { cache } from 'react'
import { Post as PostType, User } from '@/payload-types'
import { draftMode } from 'next/headers'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import RichText from '@/richtext'
import { formatDateFromISO } from '@/utils/formatdate'
import { Prose } from '@/components/Prose'
import { Metadata } from 'next'
import Head from 'next/head'

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  let post: PostType | null
  const { slug } = await params


  post = await queryPostBySlug({
    slug,
  })
  
  return {
    title: post.meta?.title,
    description: post.meta?.description,
  }
}

const post = async ({ params }: { params: Params }) => {
  const { slug } = await params
  let post: PostType | null
  post = await queryPostBySlug({
    slug,
  })

  const publishedDate = formatDateFromISO(post.publishedAt!)
  const author = (post.authors as User[])[0] || '@uluckydev'

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.meta?.title,
    description: post.meta?.description,
    // url: "https://mywebsite.com/article",
    // Additional properties can go here
  };

  return (
    <div className="max-w-screen-sm mx-auto px-3 md:px-5">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Head>
      <article className="mt-10">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tighter">{post.title}</h1>
          <div className="flex gap-2 items-center mt-1">
            <p className="text-secondary text-sm font-mono ">@{author.username}</p>
            <span className="w-[1px] h-4 bg-secondary" />
            <p className="text-secondary text-sm font-mono ">{publishedDate}</p>
          </div>
        </div>
        <Prose>
          <RichText content={post.content!} />
        </Prose>
      </article>
    </div>
  )
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  // const { isEnabled: draft } = draftMode()

  const payload = await getPayloadHMR({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    //   draft,
    limit: 1,
    overrideAccess: true,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

export default post
