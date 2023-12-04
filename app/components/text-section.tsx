interface Props {
  children: string | JSX.Element | (string | JSX.Element)[];
}

export default function TextSection({ children }: Props) {
  return (
    <section className="flex flex-col mx-auto max-w-2xl justify-center items-center md:text-lg h-full">
      {children}
    </section>
  );
}
