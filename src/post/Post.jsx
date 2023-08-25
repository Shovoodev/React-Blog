import "./post.css"

export default function Post(props) {
  return (
    <div className='post'>
            <img
            className="postImg"
            src={props.image}
            alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Tecknology
                    </span>
                    <span className="postCat"> Life</span>
                </div>
                <span className="postTitle">{props.title}</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">{props.description}</p>
    </div>
  )
}
