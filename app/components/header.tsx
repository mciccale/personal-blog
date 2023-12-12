interface Props {
  children: string | JSX.Element | (string | JSX.Element)[];
}

export default function Header({ children }: Props) {
  return (
    <h1 className="pt-4 text-3xl font-bold dark:text-white md:pt-6 md:text-4xl">
      {children}
    </h1>
  );
}
