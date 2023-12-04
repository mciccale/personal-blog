interface Props {
  children: string | JSX.Element | (string | JSX.Element)[];
}

export default function Header({ children }: Props) {
  return <h1 className="text-3xl md:text-4xl p-4 font-bold">{children}</h1>;
}
