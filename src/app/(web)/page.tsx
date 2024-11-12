
import { cache } from 'react'
import pageTemplate from './[slug]/page'
import { Page as PageType } from '@/payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { Metadata } from 'next'

export const revalidate = 60

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    let page: PageType | null
   
    page = await queryPageBySlug({
        slug: 'home',
    })

    return {
        title: page.meta?.title,
        description: page.meta?.description,
    }
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