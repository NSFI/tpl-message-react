import React from "react";
import { Button, Modal } from "antd-mobile";

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
      <div style={{ color: "red", fontWeight: "bold" }}>
        {content.data.staffName}
      </div>
      <img
        src={content.data.img}
        style={{ width: "100%", height: 200, objectFit: "contain" }}
        alt=''
      />

      <Button
        style={{
          marginTop: 12,
        }}
        block
        onClick={() =>
          Modal.alert({
            content: (
              <img
                style={{ width: "100%" }}
                src={content.data.staffImage}
              ></img>
            ),
          })
        }
      >
        查看客服详情
      </Button>
    </div>
  );
};

export default CustomMessage;
