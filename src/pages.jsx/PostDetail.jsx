import { useParams } from 'react-router-dom';

import NotFound from './NotFound';
import { UseMyData } from '../store/context';

export function PostDetail() {
  const { myPosts } = UseMyData();
  const { id } = useParams();
  const myPost = myPosts.find((post) => post.id == id);

  if (!myPost) {
    return <NotFound />;
  }

  return (
    <div>
      {
        <div>
          <h1>{myPost.id}</h1>
          <h2>{myPost.title}</h2>
          <h3>{myPost.content}</h3>
        </div>
      }
    </div>
  );
}
