import { ReadPost } from './icons'

const components = {
  readPost: ReadPost,
}

type PageIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const PageIcon = ({ kind, href, size = 8 }: PageIconProps) => {
  const PageSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <PageSvg
        className={`fill-current text-gray-400 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default PageIcon
