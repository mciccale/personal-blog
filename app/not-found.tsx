import Header from './components/header';
import MainContainer from './components/main-container';
import TextSection from './components/text-section';

export default function NotFound() {
  return (
    <MainContainer>
      <TextSection>
        <section className="text-center">
          <Header>404 - Not Found!</Header>
          <h2 className="text-xl md:text-2xl">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </h2>
        </section>
      </TextSection>
    </MainContainer>
  );
}
