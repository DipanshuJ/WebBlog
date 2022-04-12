import './post.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function Post(props) {
  return (
    <>
    
    <div>
      <div className="post">
          <div className="postImg">
              <img src={props.link} alt="" />
          </div>
          <div className="postInfo">
            <Link className="postTitle" to="/singlepost">{props.title}</Link>
            <span className="postDate">Last Updated at -10/02/2022 08:55</span>
          </div>
          <div className="postDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore odio tenetur, voluptatibus temporibus aliquid nobis molestiae ut aperiam? Voluptate aliquid dolorem laboriosam odio vel excepturi est quia quam officia saepe</div>
      </div>
    </div>
    </>
  );
}

Post.propTypes={
  title: PropTypes.string.isRequired
}

Post.defaultProps={
  link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2p2pBliT98N3usIpiX0FZ6UcdGNUrt6HRg&usqp=CAU"
}

export default Post
