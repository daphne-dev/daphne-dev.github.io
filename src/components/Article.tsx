import Link from '@components/Link'
import Tag from '@components/Tag'
import dayjs from 'dayjs'
import PostViewButton from '@components/page-icons'

const Article = ({ path, date, title, summary, tags }) => (
  <li key={path} className="border-none pt-7">
    <div className="relative m-0 flex w-full flex-wrap  rounded-3xl border border-neutral-300  px-7 py-4">
      <div className="w-5/6 ">
        <dl className="mb-2">
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={date}>{dayjs(date).format('YYYY-MM-DD')}</time>
          </dd>
        </dl>
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                <Link href={`/posts/${path}`} className="text-gray-900 dark:text-gray-100">
                  {title}
                </Link>
              </h2>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div className="prose max-w-none text-gray-400 dark:text-gray-400">{summary}</div>
          </div>
        </div>
      </div>
      <PostViewButton kind="readPost" href={`/posts/${path}`} />
    </div>
  </li>
)
export default Article
