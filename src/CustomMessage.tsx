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
      <div style={{ color: "red" }}>{content.data.title}</div>
      <div style={{ color: "blue" }}>{content.description}</div>
      <div>全部数据：{JSON.stringify(content)}</div>
    </div>
  );
};

export default CustomMessage;
