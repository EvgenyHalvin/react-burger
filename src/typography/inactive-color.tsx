type Props = {
  children?: string;
};

const InactiveColor = ({ children }: Props) => {
  return (
    <p className="text text_type_main-default text_color_inactive">
      {children}
    </p>
  );
};

export default InactiveColor;
