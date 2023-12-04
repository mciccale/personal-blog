import Header from './components/header';
import MainContainer from './components/main-container';
import TextSection from './components/text-section';

export default function Home() {
  return (
    <MainContainer>
      <TextSection>
        <Header>
          Hi <span className="italic">devs</span> 👾
        </Header>
        <p className="text-base md:text-lg">
          Explore my world of programming and tech!
        </p>
      </TextSection>
    </MainContainer>
  );
}
