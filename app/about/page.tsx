import Image from 'next/image';
import Header from '../components/header';
import MainContainer from '../components/main-container';
import TextSection from '../components/text-section';
import profilePicture from '@/public/profile-picture.png';

export default function About() {
  return (
    <MainContainer>
      <TextSection>
        <Header>About Me</Header>
        <article>
          <div className="flex justify-between">
            <p>
              I&apos;m a passionate software engineer with{' '}
              <strong className="font-semibold">
                2+ years of experience developing software
              </strong>
              . I have proven experience working with highly distributed global
              teams and multiple projects simultaneously. I am fully committed
              on delivering{' '}
              <strong className="font-semibold">
                high quality results for the business
              </strong>
              .
            </p>
            <figure className="hidden w-full max-w-[300px] flex-shrink-0 px-7 md:block">
              <Image
                className="h-auto w-full border-spacing-2 rounded-lg border-8 border-white shadow-lg"
                src={profilePicture}
                priority={true}
                layout="responsive"
                alt={`Marco Ciccale Baztan profile picture`}
              />
            </figure>
          </div>
          <p>
            Always giving my 100% for the team and the project. At my core, I am
            a developer who thrives on{' '}
            <strong className="font-semibold">
              tackling complex challenges and stepping out of my comfort zone
            </strong>
            . I approach every project with a strategic mindset and a
            customer-centric perspective, ensuring that our solutions are not
            only <strong className="font-semibold">innovative</strong> but also
            deliver tangible value. I excel in environments that value impact,
            autonomy, and the empowerment of full-stack teams responsible for
            their own services.
          </p>
          <p>
            I&apos;m currently working as a{' '}
            <strong className="font-semibold">Research Assistant</strong> at{' '}
            <a href="https://software.imdea.org">
              <strong className="font-semibold">
                IMDEA Software Institute
              </strong>
            </a>{' '}
            while finishing my last year of the{' '}
            <strong className="font-semibold">
              computer engineering degree
            </strong>{' '}
            at{' '}
            <strong className="font-semibold">
              Universidad Politécnica de Madrid
            </strong>
            .
          </p>
        </article>
      </TextSection>
    </MainContainer>
  );
}
