import React from 'react'
import {
FacebookShareButton,
FacebookIcon,
PinterestShareButton,
PinterestIcon,
RedditShareButton,
RedditIcon,
WhatsappShareButton,
WhatsappIcon,
LinkedinShareButton,
LinkedinIcon,
} from 'next-share';

export default function Text() {
return (
 <div>
 <h1>Social Share - GeeksforGeeks</h1>
 <FacebookShareButton
  {/* Url you want to share */}
  url={'http://localhost:3000'} >
  <FacebookIcon size={32} round />
 </FacebookShareButton>
 <PinterestShareButton
  {/* Url you want to share */}
  url={'http://localhost:3000'} >
  <PinterestIcon size={32} round />
 </PinterestShareButton>
 <RedditShareButton
  {/* Url you want to share */}
  url={'http://localhost:3000'} >
  <RedditIcon size={32} round />
 </RedditShareButton>
 <WhatsappShareButton
  {/* Url you want to share */}
  url={'http://localhost:3000'} >
  <WhatsappIcon size={32} round />
 </WhatsappShareButton>
 <LinkedinShareButton
  {/* Url you want to share */}
  url={'http://localhost:3000'} >
  <LinkedinIcon size={32} round />
 </LinkedinShareButton>
 </div>
)
}
