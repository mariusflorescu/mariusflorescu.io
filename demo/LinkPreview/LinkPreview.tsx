import React from 'react'
import Head from 'next/head'
import * as HoverCard from '@radix-ui/react-hover-card'

const LinkPreview = () => {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/link-previews/dark.webp" />
        <link rel="preload" as="image" href="/link-previews/light.webp" />
      </Head>
      <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger asChild>
          <a
            href="#"
            className="relative before:transition-all before:content-[''] before:absolute before:bottom-[-4px] before:bg-pink-400 dark:before:bg-yellow-600 before:w-0 before:h-[4px] hover:before:w-full"
          >
            Demo, hover over
          </a>
        </HoverCard.Trigger>
        <HoverCard.Content
          side="top"
          sideOffset={6}
          className="bg-gray-100 dark:bg-gray-1000 shadow-lg p-2 rounded-md origin-bottom radix-state-open:animate-slide-up radix-state-closed:animate-reverse-slide"
        >
          <img
            src="/link-previews/light.webp"
            className="block dark:hidden w-[200px] h-[128px]"
          />
          <img
            src="/link-previews/dark.webp"
            className="hidden dark:block w-[200px] h-[128px]"
          />
        </HoverCard.Content>
      </HoverCard.Root>
    </>
  )
}

export default LinkPreview
