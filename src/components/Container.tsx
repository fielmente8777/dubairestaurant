const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-width">{children}</div>;
};

export default Container;
