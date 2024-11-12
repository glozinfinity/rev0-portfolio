import { Page } from '@/payload-types'
import Link from 'next/link'
import React from 'react'
import { icons } from 'lucide-react'

type LinkData = {
  platform: string
  url: string
}

type Props = Extract<Page['layout'], { blockType: 'socialMediaLinks' }>

const SocialMediaLinks = (props: Props) => {
  const { links } = props
  return (
    <div className="flex gap-3 mt-5 px-3 md:px-5">
      {links &&
        (links as LinkData[])?.map((item, index) => {
          const IconComponent = item.platform && icons[item.platform as keyof typeof icons]

          if (!IconComponent) return null
          return (
            <Link key={index} href={item.url}>
              <IconComponent size={18} />
            </Link>
          )
        })}
    </div>
  )
}

export default SocialMediaLinks
