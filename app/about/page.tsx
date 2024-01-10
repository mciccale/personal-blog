import { Metadata } from 'next';
import Image from 'next/image';

import profilePicture from '@/public/profile-picture.png';

import Bold from '../components/bold';
import Header from '../components/header';
import MainContainer from '../components/main-container';
import TextSection from '../components/text-section';

export const metadata: Metadata = {
  title: 'About Me',
};

export default function About() {
  return (
    <MainContainer>
      <TextSection>
        <Header>About Me</Header>
        <article>
          <div className="flex justify-between">
            <p>
              I&apos;m a passionate software engineer with{' '}
              <Bold>2+ years of experience developing software</Bold>. I have
              proven experience working with highly distributed global teams and
              multiple projects simultaneously. I am fully committed on
              delivering <Bold>high quality results for the business</Bold>.
            </p>
            <figure className="hidden w-full max-w-[300px] flex-shrink-0 px-7 md:block">
              <Image
                className="h-auto w-full border-spacing-2 rounded-lg border-8 border-white shadow-lg dark:border-gray-800"
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
            <Bold>
              tackling complex challenges and stepping out of my comfort zone
            </Bold>
            . I approach every project with a strategic mindset and a
            customer-centric perspective, ensuring that our solutions are not
            only <Bold>innovative</Bold> but also deliver tangible value. I
            excel in environments that value impact, autonomy, and the
            empowerment of full-stack teams responsible for their own services.
          </p>
          <p>
            I&apos;m currently working as a <Bold>Research Assistant</Bold> at{' '}
            <a href="https://software.imdea.org">
              <Bold>IMDEA Software Institute</Bold>
            </a>{' '}
            while finishing my last year of the{' '}
            <Bold>computer engineering degree</Bold> at{' '}
            <Bold>Universidad Politécnica de Madrid</Bold>.
          </p>
        </article>
      </TextSection>
    </MainContainer>
  );
}
