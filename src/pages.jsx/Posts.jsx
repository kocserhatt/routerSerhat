import { Link } from 'react-router-dom';
import { UseMyData } from '../store/context';

export default function Posts() {
  const { myPosts } = UseMyData();
  console.log(myPosts);
  return (
    <div className='posts'>
      {myPosts.map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          {post.title}
        </Link>
      ))}
    </div>
  );
}
