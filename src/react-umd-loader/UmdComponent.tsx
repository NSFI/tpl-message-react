import React, { useEffect, useRef, useState } from "react";
import { preFetchLib } from "./shared";

type Props = {
  libName: string; // 包名称
  libUrl: string; // 包地址
  componentName: string; // 组件名称
  componentProps?: any; // 组件属性
  fallback?: React.ReactNode;
};

// 通过 umd 加载组件
const UmdComponent = (props: Props) => {
  const libRef = useRef<any>(null);
  const [, forceUpdate] = useState({});

  const { libName, libUrl, componentName, componentProps, fallback } = props;

  const loadRemote = async () => {
    try {
      const lib = await preFetchLib(libName, libUrl);
      libRef.current = lib;
      console.log("loadRemote success", lib);
      forceUpdate({});
    } catch (error) {
      console.log("loadRemote error");
      console.error(error);
    }
  };

  useEffect(() => {
    loadRemote();
  }, []);

  const RenderComponent = libRef.current?.[componentName];

  return (
    <>{RenderComponent ? <RenderComponent {...componentProps} /> : fallback}</>
  );
};

export default UmdComponent;
