interface GetImageUrlProps {
  path:string
  size:number
}
export const getImageUrl = ({ path, size }: GetImageUrlProps) => {
  if (!path)
    return 'https://dummyimage.com/84x84'
  return `https://${process.env.NEXT_PUBLIC_ASSETS_URL}/${path}/${size}/${size}`
}
