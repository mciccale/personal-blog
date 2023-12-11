import MainContainer from '../components/main-container';

export default function Loading() {
  return (
    <MainContainer>
      <section className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-2">
        <p className="text-2xl font-semibold md:text-4xl">Loading...</p>
      </section>
    </MainContainer>
  );
}
