type Props = {
  children?: string;
};

const Large = ({ children }: Props) => {
  return <p className="text text_type_main-large">{children}</p>;
};

export default Large;
