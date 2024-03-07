import { TinyColor } from "@ctrl/tinycolor";
import cssVars from "css-vars-ponyfill";

export type Theme = {
  primaryColor?: string;
  onPrimaryColor?: string;
  foreColor?: string;
  onForeColor?: string;
  tipColor?: string;
  placeholderColor?: string;
  borderColor?: string;

  // 前端自定义
  textColor?: string;
  tip2Color?: string;
  modalColor?: string;
  themeLighten1?: string;
  themeLighten2?: string;
  themeLighten3?: string;
};

type ThemeKey = keyof Theme;

const defaultTheme = {
  primaryColor: "#337eff",
  onPrimaryColor: "#ffffff",
  foreColor: "#ffffff",
  onForeColor: "#000000d9", // 透明度：85%
  tipColor: "#00000073", // 透明度：45%
  placeholderColor: "#00000040", // 透明度：25%
  borderColor: "#0000001A", // 透明度：10%

  // 前端自定义
  textColor: "#000000d9", // 透明度：85%
  tip2Color: "#00000026", // 透明度：15%
  modalColor: "",
  themeLighten1: "",
  themeLighten2: "",
  themeLighten3: "",
};

export const setTheme = (theme: Theme) => {
  theme = { ...defaultTheme, ...theme };

  // 转换为rgba，低版本安卓机器不支持 hex8 位
  const rgbaTheme: Theme = {};
  Object.keys(theme).forEach((key) => {
    const color = new TinyColor(theme[key as ThemeKey]).toRgbString();
    rgbaTheme[key as ThemeKey] = color;
  });

  // 模态框背景色
  let modalColor = "";
  const foreColor = new TinyColor(theme.foreColor);
  if (foreColor.isDark()) {
    modalColor = "#1a1a1a";
  } else {
    modalColor = "#ffffff";
  }
  rgbaTheme.modalColor = modalColor;

  // 主题色-浅色
  const themeLighten1 = new TinyColor(theme.primaryColor)
    .lighten(10)
    .toRgbString();
  const themeLighten2 = new TinyColor(theme.primaryColor)
    .lighten(20)
    .toRgbString();
  const themeLighten3 = new TinyColor(theme.primaryColor)
    .lighten(30)
    .toRgbString();
  rgbaTheme.themeLighten1 = themeLighten1;
  rgbaTheme.themeLighten2 = themeLighten2;
  rgbaTheme.themeLighten3 = themeLighten3;

  cssVars({
    variables: {
      "--ysf-color-primary": rgbaTheme.primaryColor, // 主题色 原同步数据：bgColor
      "--ysf-color-on-primary": rgbaTheme.onPrimaryColor, // 主题色-文本叠加色
      "--ysf-color-primary-light1": rgbaTheme.themeLighten1,
      "--ysf-color-primary-light2": rgbaTheme.themeLighten2,
      "--ysf-color-primary-light3": rgbaTheme.themeLighten3,
      "--ysf-color-fore": rgbaTheme.foreColor, // 前景色
      "--ysf-color-on-fore": rgbaTheme.onForeColor, // 前景色-文本叠加色
      "--ysf-color-border": rgbaTheme.borderColor, // 边框颜色
      "--ysf-color-tip": rgbaTheme.tipColor, // 提示颜色
      "--ysf-color-tip2": rgbaTheme.tip2Color, // 提示颜色2
      "--ysf-color-placeholder": rgbaTheme.placeholderColor, // 输入框暗纹颜色
      "--ysf-color-success": "#67c23a", // 成功颜色
      "--ysf-color-warning": "#e6a23c", // 危险颜色
      "--ysf-color-danger": "#f25058", // 失败颜色
      "--ysf-color-highlight": "red", // 搜索高亮颜色
      "--ysf-color-link": "#176ae5", // a标签超链接颜色
      "--ysf-color-link-hover": "#257ce4", // a标签超链接hover颜色
      "--ysf-color-text": rgbaTheme.textColor, // 文本颜色
      "--ysf-color-modal": rgbaTheme.modalColor, // 模态框背景色
    } as any,
  });
};

// 颜色or图片
export const genBgStyle: (style: string, useImage?: boolean) => React.CSSProperties = (
  style,
  useImage
) => {
  if (useImage && !style) {
    return {};
  }
  return useImage
    ? {
        backgroundImage: `url(${style})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundColor: "transparent",
      }
    : { backgroundColor: style };
};
