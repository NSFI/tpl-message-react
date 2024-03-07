import { genBgStyle } from "../ConfigProvider/theme";
import "./index.less";

type Props = {
  children: React.ReactNode;
};

const LayoutCanvas = (props: Props) => {
  const companyInfo = window.setting?.companyInfo;
  const useImage = companyInfo?.backgroundType === 2;
  const bgStyle = genBgStyle(
    useImage
      ? companyInfo?.chatBgCustomImage
      : companyInfo?.chatBgCustomColor || "#babbbf",
    useImage
  );

  return (
    <div className='layout-canvas g-root' style={bgStyle}>
      <div className='layout-canvas__header'>网易七鱼</div>
      <div className="layout-canvas__body">
        <div className='layout-canvas__message'>
          <img
            className="layout-canvas__avatar"
            src='https://ysf.qiyukf.net/operation/1348aff9ddc672e8035489189352ec1a'
            alt=''
          />
          <div className='layout-canvas__bubble'>
            <div className='layout-canvas__arrow'></div>
            <div>{props.children}</div>
          </div>
        </div>
      </div>

      <div className='layout-canvas__footer'>
        <div className="layout-canvas__input">请输入内容</div>
        <div className="layout-canvas__btn">发送</div>
      </div>
    </div>
  );
};

export default LayoutCanvas;
