import { Tweet, TweetProps } from 'react-tweet'

const EmbeddedTweet = (props: TweetProps) => {
  return (
    <div className="not-prose system">
      <Tweet {...props} />
    </div>
  )
}

export default EmbeddedTweet
