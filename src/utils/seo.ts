import { useHead } from '@unhead/vue'

export const SITE_NAME = '諾秋工作室'
export const SITE_URL = 'https://nordchiou.com'
export const DEFAULT_TITLE = '諾秋工作室 | 專業軟體開發與網頁設計'
export const DEFAULT_DESCRIPTION = '諾秋工作室提供專業軟體開發、網頁設計與數位轉型解決方案。我們為企業提供客製化的技術服務，解決您的軟體開發需求。'
export const DEFAULT_IMAGE = `${SITE_URL}/logo.png`

type SchemaInput = Record<string, unknown> | Array<Record<string, unknown>>

interface SiteSeoOptions {
  title?: string
  description?: string
  path?: string
  type?: 'website' | 'article'
  image?: string
  schema?: SchemaInput
}

export const absoluteUrl = (path = '/') => new URL(path, SITE_URL).toString()

export function useSiteSeo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  type = 'website',
  image = DEFAULT_IMAGE,
  schema
}: SiteSeoOptions = {}) {
  const canonical = absoluteUrl(path)
  const imageUrl = image.startsWith('http') ? image : absoluteUrl(image)

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: imageUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl }
    ],
    link: [
      { rel: 'canonical', href: canonical }
    ],
    script: schema
      ? [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(schema)
          }
        ]
      : []
  })
}
