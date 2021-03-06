import React from 'react'
import { CopyIcon, CheckIcon } from '@icons'
import DemoLinkPreview from '@demo/LinkPreview'

const CodeBlock = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLPreElement>,
    HTMLPreElement
  >
) => {
  const ref = React.useRef<HTMLPreElement>(null)

  const [isCopied, setIsCopied] = React.useState(false)
  const [text, setText] = React.useState('')

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text)

    setIsCopied(() => true)

    setTimeout(() => {
      setIsCopied(() => false)
    }, 3000)
  }

  React.useEffect(() => {
    if (ref && ref.current) {
      setText(ref.current.innerText)
    }
  }, [])

  return (
    <div>
      <div className="rounded-t-md flex justify-end p-1 bg-gray-1000 dark:bg-gray-1000">
        <button
          onClick={() => handleCopyToClipboard()}
          className="group cursor-pointer flex gap-1 items-center py-1 px-2 rounded-md transition-colors duration-200 hover:bg-gray-800 hover:dark:bg-gray-800"
        >
          {isCopied ? (
            <CheckIcon className="w-3 h-3 text-gray-400 dark:text-gray-400 transition-colors duration-200 group-hover:text-gray-200 dark:group-hover:text-gray-200" />
          ) : (
            <CopyIcon className="w-3 h-3 text-gray-400 dark:text-gray-400 transition-colors duration-200 group-hover:text-gray-200 dark:group-hover:text-gray-200" />
          )}
          <span className="text-xs text-gray-400 dark:text-gray-400 transition-colors duration-200 group-hover:text-gray-200 dark:group-hover:text-gray-200">
            {isCopied ? 'Copied' : 'Copy'} source
          </span>
        </button>
      </div>
      <pre ref={ref} {...props} />
    </div>
  )
}

const anchor = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => (
  <a
    {...props}
    target={props.href?.startsWith('https') ? '_blank' : undefined}
  />
)

const inlineCode = (
  props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) => (
  <code
    className="before:content-[''] after:content-[''] px-1 bg-gray-200 dark:bg-gray-800 rounded select-all"
    {...props}
  ></code>
)

const MDXComponents = {
  pre: CodeBlock,
  a: anchor,
  inlineCode,
  DemoLinkPreview
}

export default MDXComponents
