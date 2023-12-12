interface Props {
  children: string | JSX.Element | (string | JSX.Element)[];
}

export default function TextSection({ children }: Props) {
  return (
    <section className="prose mx-auto flex h-full max-w-2xl flex-col justify-center dark:prose-invert dark:text-white md:text-lg">
      {children}
    </section>
  );
}
