interface Props {
  children: string | JSX.Element | (string | JSX.Element)[];
}

export default function Header({ children }: Props) {
  return (
    <h1 className="text-3xl md:text-4xl pt-4 md:pt-6 font-bold">{children}</h1>
  );
}
