import axios from 'axios';

const IndexPage = ({ posts }) => {
    return (
        <div>
          <h1>Index Page</h1>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
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
