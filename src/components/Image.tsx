import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, ...rest }: ImageProps) => (
  <NextImage src={`/daphne-blog-v2${src}`} {...rest} />
)

export default Image
