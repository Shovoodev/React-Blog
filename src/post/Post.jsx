import "./post.css"

export default function Post() {
  return (
    <div className='post'>
            <img
            className="postImg"
            src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
            alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music
                    </span>
                    <span className="postCat"> Life</span>
                </div>
                <span className="postTitle">this is a post for show</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">  this is the description of the post  If there is none, this is where you come in. New bloggers who can find a unique niche to create content about have a higher chance of surviving in the competitive blogging world. Preferably, you should be passionate about or an expert in your blog niche. However, don’t worry if you are having a difficult time pinning down a topic – this article will help you.

In this article, we will explore 11 types of blogs in different niche industries, including tech, lifestyle, beauty and fashion, health and fitness, education, business and marketing, finance and investment, food, travel, photography, and art and design.</p>
    </div>
  )
}
