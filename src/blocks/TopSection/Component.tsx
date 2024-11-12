import { Prose } from '@/components/Prose'
import { Page } from '@/payload-types'
import RichText from '@/richtext'
import Image from 'next/image'

type Props = Extract<Page['layout'], { blockType: 'topSection' }>

export const TopSectionBlock = (props: Props) => {
  const { avater, title, paragraph } = props
  const { height, width, url, alt } = avater
  return (
    <div className='px-3 md:px-5'>
      <Image src={url} width={70} height={70} className="rounded-full overflow-clip " alt={alt} />

      <h1 className="mt-16 !text-3xl font-semibold !tracking-tighter">{title}</h1>
      <div className="max-w-screen-sm">
        <Prose>
          <RichText content={paragraph} />
        </Prose>
      </div>
    </div>
  )
}
