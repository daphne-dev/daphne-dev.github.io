import { ReadPost } from './icons'
import Link from '@components/Link'

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
      <Link href={`${href}`} className="mr-3">
        <PostViewButtonSvg
          className={`stroke-current text-gray-400 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
        />
      </Link>
    </div>
  )
}

export default PostViewButton
