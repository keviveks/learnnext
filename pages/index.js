import Link from 'next/link';

const IndexPage = () => {
    return (
        <div>
          <Link href="/about"><a>About Page</a></Link>
          <Link href="/contact"><a>Contact Page</a></Link>
          <h1>Index Page</h1>
        </div>
    );
}

export default IndexPage;
