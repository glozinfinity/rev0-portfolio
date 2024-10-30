import { DefaultNodeTypes } from '@payloadcms/richtext-lexical'
import React, { Fragment, JSX } from 'react'
import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from './nodeFormat'
import { ContentLink } from '@/components/link/content-link'

export type NodeTypes = DefaultNodeTypes

type Props = {
  nodes: DefaultNodeTypes[]
}

export function serializeLexical({ nodes }: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, index): JSX.Element | null => {
        if (node == null) return null

        if (node.type === 'text') {
          let text = <React.Fragment key={index}>{node.text}</React.Fragment>
          if (node.format & IS_BOLD) {
            text = <strong key={index}>{text}</strong>
          }
          if (node.format & IS_ITALIC) {
            text = <em key={index}>{text}</em>
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} style={{ textDecoration: 'line-through' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} style={{ textDecoration: 'underline' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_CODE) {
            text = <code key={index}>{node.text}</code>
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>
          }

          return text
        }

        const serializedChildrenFn = (node: NodeTypes): JSX.Element | null => {
          if (node.children == null) {
            return null
          } else {
            if (node?.type === 'list' && node?.listType === 'check') {
              for (const item of node.children) {
                if ('checked' in item) {
                  if (!item?.checked) {
                    item.checked = false
                  }
                }
              }
            }
            return serializeLexical({ nodes: node.children as NodeTypes[] })
          }
        }

        const serializedChildren = 'children' in node ? serializedChildrenFn(node) : ''

        switch (node.type) {
          case 'linebreak': {
            return <br className="col-start-2" key={index} />
          }
          case 'paragraph': {
            return (
              <p className="col-start-2" key={index}>
                {serializedChildren}
              </p>
            )
          }
          case 'heading': {
            const Tag = node?.tag
            return (
              <Tag className="col-start-2 font-bold" key={index}>
                {serializedChildren}
              </Tag>
            )
          }
          case 'list': {
            const Tag = node?.tag
            return (
              <Tag className="list col-start-2 pl-0" key={index}>
                {serializedChildren}
              </Tag>
            )
          }
          case 'listitem': {
            if (node?.checked != null) {
              return (
                <li
                  aria-checked={node.checked ? 'true' : 'false'}
                  className={` ${node.checked ? '' : ''}`}
                  key={index}
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                  role="checkbox"
                  tabIndex={-1}
                  value={node?.value}
                >
                  {serializedChildren}
                </li>
              )
            } else {
              return (
                <li
                  key={index}
                  value={node?.value}
                  className="
                            my-2
                            [ul_&]:relative
                            [ul_&]:pl-4
                            [ul_&]:before:text-gray-400
                            [ul_&]:before:content-['–']
                            [ul_&]:before:mr-2
                            [ul_&]:before:absolute
                            [ul_&]:before:-ml-4
                            list-none
                          "
                >
                  {serializedChildren}
                </li>
              )
            }
          }
          case 'quote': {
            return (
              <blockquote className="col-start-2" key={index}>
                {serializedChildren}
              </blockquote>
            )
          }
          case 'link': {
            const fields = node.fields

            return (
              <ContentLink
                key={index}
                newTab={Boolean(fields?.newTab)}
                reference={fields.doc as any}
                type={fields.linkType === 'internal' ? 'reference' : 'custom'}
                url={fields.url}
              >
               a {serializedChildren}
              </ContentLink>
            )
          }

          default:
            return null
        }
      })}
    </Fragment>
  )
}