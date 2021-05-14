import Layout from '../Components/Layout'
import {posts} from '../profile'
import Link from 'next/link'


const PostCard = ({ post }) => (
    <div className="col-md-4">
        <div className="card">
            <div className="overflow">
            <img src={post.imageURL} alt="" className="card-img-top" />
            </div>
            <div className="card-body">
                <h1>{post.title}</h1>
                <p>{post.content}</p>

                <Link href={`/post?title=${post.title}`} as="react">
                <button className="btn btn-ligth">
                    read
                </button>
                </Link>
            </div>
        </div>
    </div>
)


const Blog = () => (
    <Layout footer={false} title="My Blog">
        <div className="row">
        {
            posts.map((post, i) => (
               <PostCard post={post} key={i}/>
            ))
        }
        </div>
    </Layout>
)

export default Blog;