type Props = {
  children?: string;
};

const Default = ({ children }: Props) => {
  return <p className="text text_type_main-default">{children}</p>;
};

export default Default;
