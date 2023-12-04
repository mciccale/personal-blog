interface Props {
  children: string | JSX.Element | (string | JSX.Element)[];
}

export default function MainContainer({ children }: Props) {
  return <main className="p-8">{children}</main>;
}
