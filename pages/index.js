import axios from 'axios';
import Link from 'next/link';

const IndexPage = ({ posts }) => {
    return (
        <div>
          <h1>Index Page</h1>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}><a>{post.title}</a></Link>
            </li>
          ))}
        </div>
    );
}

IndexPage.getInitialProps = async (appContext) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = response;
  return { posts: data };
};

export default IndexPage;
