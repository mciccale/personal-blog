import Link from 'next/link';
import MainContainer from '../components/main-container';

export default async function Posts() {
  return (
    <MainContainer>
      <section className="flex justify-around flex-wrap mx-auto max-w-2xl">
        <Link href="/posts/first-post">Go</Link>
      </section>
    </MainContainer>
  );
}
