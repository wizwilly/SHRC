
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Saudi HR Community</h1>
      <nav>
        <ul>
          <li><Link href="/jobs">Jobs</Link></li>
          <li><Link href="/articles">Articles</Link></li>
        </ul>
      </nav>
    </div>
  );
}
