type Props = {
  children?: string;
};

const Small = ({ children }: Props) => {
  return <p className="text text_type_main-small">{children}</p>;
};

export default Small;