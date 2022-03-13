import React from 'react'

type TProps = {
  publishedAt: string
  readingTime: string
}

const PostDetails: React.FC<TProps> = ({ publishedAt, readingTime }) => {
  return (
    <React.Fragment>
      <div className="w-full flex justify-between items-center">
        <em>{publishedAt}.</em>
        <em>{readingTime}</em>
      </div>
      <hr />
    </React.Fragment>
  )
}

export default PostDetails
