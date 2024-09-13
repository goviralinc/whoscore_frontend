import React from "react";

type Props = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Spinner = (props: Props) => {
  return <div className="spinner" {...props}></div>;
};

export default Spinner;
