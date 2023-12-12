interface Props {
  children: string | JSX.Element | (string | JSX.Element)[];
}

export default function Bold({ children }: Props) {
  return <strong className="font-semibold dark:text-white">{children}</strong>;
}
