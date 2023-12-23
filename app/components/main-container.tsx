interface Props {
  children: string | JSX.Element | (string | JSX.Element)[];
}

export default function MainContainer({ children }: Props) {
  return <main className="px-8 md:py-8 ">{children}</main>;
}
