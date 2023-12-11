import Link from 'next/link';
import Header from './components/header';
import MainContainer from './components/main-container';
import TextSection from './components/text-section';

export default function Home() {
  return (
    <MainContainer>
      <TextSection>
        <Header>
          Hi <span className="italic">devs</span> 👾,
        </Header>
        <p>
          Welcome to my little <span className="italic">coding corner</span>!
          This is a space where I&apos;d love to share my experiences, knowledge
          and challenges encountered during my exciting journey mastering my
          passion:{' '}
          <strong className="font-semibold">software development</strong>.
        </p>
        <h3 className="text-xl font-bold md:text-2xl">Why am I doing this?</h3>
        <p>
          You might wonder why I&apos;m eager to share my journey with the
          world. The reason is quite simple:
        </p>
        <p>
          I&apos;ve always cherished the sense of community in the software
          industry. I can&apos;t count how many things I&apos;ve learned from
          content created by others, aimed at helping people dive into this
          thrilling field. Now, feeling ready to contribute, I&apos;ve decided
          to start my personal blog. It&apos;s not just because I&apos;m
          passionate about software, but because I love lending a hand to those
          embarking on their own journey in this industry, just as I once did.
        </p>
        <p>
          I hope you can find this website useful and/or interesting in any
          manner. Feel free to contact me <Link href="/contact">here</Link>
        </p>
      </TextSection>
    </MainContainer>
  );
}
