import { ReadPost } from './icons'

const components = {
  readPost: ReadPost,
}

type PageIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const PostViewButton = ({ kind, href, size = 8 }: PageIconProps) => {
  const PostViewButtonSvg = components[kind]

  return (
    <div className="absolute bottom-4 right-5 inline-flex">
      <a className="mr-3" target="_blank" rel="noopener noreferrer" href={href}>
        <PostViewButtonSvg
          className={`fill-current text-gray-400 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
        />
      </a>
    </div>
  )
}

export default PostViewButton
