type Props = {
  children?: string;
};

const Medium = ({ children }: Props) => {
  return <p className="text text_type_main-medium">{children}</p>;
};

export default Medium;
