import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://blog.hootsuite.com/wp-content/uploads/2019/03/Schedule-Facebook-Posts.jpg" 
            alt=""
             className="singlePostImg" />
             <h1 className="singlePostTitle">
                This is the single post Title.
             <div className="singlePostEdit">
             <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
             <i className="singlePostIcon fa-solid fa-trash-can"></i>
           
             </div>
             </h1>
             <div className="singlePostInfo">
                <span className="singlePostAuthor">Author : <b> rahman </b></span>
                <span className="singlePostDate">1 hour ago</span>
               
             </div>
             <p className="singlePostDesc"> Those caught up in the blaze described chaotic and frightening scenes, with some having to leave on foot or find their own transport after being told to leave.

The wildfire in the central and south part of Rhodes – a hugely popular island for holidaymakers – has been burning since Tuesday. It is the largest of a number of blazes in Greece, which is sweltering due to a heat wave that experts say is likely to become the country’s longest on record.

Amy Leyden, a British tourist in Rhodes, said she was told to leave her hotel immediately or her and her family “would not make it.”

“It was just terrifying,” she told Sky News. “We’ve got our 11-year-old daughter with us and we were walking down the road at two o’clock in the morning and the fire was catching up with us.”

Cedric Guisset, a Belgian tourist, fled Saturday with nowhere to go. “We told the hotel about the messages we had received on our phones to evacuate the area, but they didn’t even know about it,” he told public radio station RTBF.</p>
        </div>
    </div>
  )
}
