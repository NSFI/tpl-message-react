import React from "react";
import "./CustomMessage.less";

type Props = {
  content: {
    data: any;
    description: string;
  };
};

const CustomMessage: React.FC<Props> = (props) => {
  const { content } = props;
  return (
    <div className='qy-custom-message'>
      <div>{JSON.stringify(content)}</div>
    </div>
  );
};

export default CustomMessage;
