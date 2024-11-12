import { getPayloadHMR } from '@payloadcms/next/utilities'
import { cache } from 'react'
import configPromise from '@payload-config'
import { Page as PageType } from '@/payload-types'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { TrafficCone } from 'lucide-react'
import { Metadata } from 'next'




type Params = Promise<{ slug: string }>
// export async function generateStaticParams() {
//   const payload = await getPayloadHMR({ config: configPromise })
//   const pages = await payload.find({
//     collection: 'pages',
//     draft: false,
//     limit: 1000,
//   })

//   return pages.docs
//     ?.filter((doc) => {
//       return doc.slug !== 'home'
//     })
//     .map(({ slug }) => slug)
// }

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  let page: PageType | null
  let slug = 'home'
  const parameter = await params
  if (parameter.slug) slug = parameter.slug

  page = await queryPageBySlug({
    slug,
  })

  return {
    title: page.meta?.title,
    description: page.meta?.description,
  }
}



const pageTemplate = async ({ params }: { params: Params }) => {
  let page: PageType | null
  // const {slug} = await params
  let slug = 'home'
  const parameter = await params
  if (parameter.slug) slug = parameter.slug
  page = await queryPageBySlug({
    slug,
  })

  if (!page) return notFound()

  

  const { layout, title } = page
  return (
    <div className="max-w-screen-sm mx-auto">
      <article className="mt-10">
        {slug != 'home' && <h1 className="text-2xl tracking-tighter font-semibold px-3 md:px-5 flex gap-2 items-center"><TrafficCone />{title}</h1>}
        {layout && <RenderBlocks blocks={layout} />}
      </article>
    </div>
  )
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  // const { isEnabled: draft } = draftMode()

  const payload = await getPayloadHMR({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    // draft,
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
export default pageTemplate
