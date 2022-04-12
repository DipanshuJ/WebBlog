import Post from './Post'
import './posts.css'

function Posts() {
  return (
    <div className='posts'>
      <Post title="Artificial Intelligence" link="https://media.istockphoto.com/photos/artificial-intelligence-and-future-concept-picture-id1034901762?k=20&m=1034901762&s=612x612&w=0&h=lMi11KU07iB5QRSpb0M338PnWsxq5Zz_zXIorQeLclk="/>
      <Post title="Virtual Reality" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUpcn09Vr030LMGwxCjmmJPLJyrzSUJw1OA&usqp=CAU"/>
      <Post title="Machine learning" link="https://miro.medium.com/max/848/1*M9le42saJxWlOYyYvhKtPA.jpeg" />
      <Post title="Blockchain" link="https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg"/>
      <Post title="Internet of Things (IoT)" link="https://justcreative.com/wp-content/uploads/2018/11/internet-of-things.jpg"/>
      <Post title="Data Science" link="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2019/09/11134058/What-is-data-science-2.jpg"/>
      <Post title="DevOps" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeh30c-3ajGKBFjcNGgKypLfl2SdctxolnVQ&usqp=CAU"/>
      <Post title="Robotic Process Automation" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKYNJ43IJqasCfcB7RFrZBvMfbxdlv6Gysg&usqp=CAU"/>
      <Post title="Quantum Computing" link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Hm29c4xnCV9yWYYhzgYArUIt6K74xMjRqQ&usqp=CAU"/>
    </div>
  )
}

export default Posts
