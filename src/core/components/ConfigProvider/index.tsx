import React, { useEffect, useState } from "react";

import axios from "axios";
import queryString from "query-string";
import { setTheme } from "./theme";

const queryObj = queryString.parse(window.location.search);
const appkey = queryObj.k;
const templateId = queryObj.templateId;

type Props = {
  children: React.ReactNode;
};

const ConfigProvider = (props: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!appkey) {
      setError(true);
      return;
    }

    let link = `/client/setting/data?k=${appkey}&wp=1`;
    if (templateId) {
      link += `&templateId=${templateId}`;
    }
    axios
      .get(link)
      .then((response) => {
        const { data}  = response;
        if (data.code === 200) {
          setTheme(data.result.companyInfo.theme);
          setLoaded(true);
        } else {
          console.log("配置读取失败");
          setError(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
      });
  }, []);

  if (error) {
    return <div style={{ padding: 12 }}>企业配置读取失败，请确认链接中是否包含企业 appKey</div>;
  }

  if (!loaded) {
    return <div style={{ padding: 12 }}>企业配置读取中...</div>;
  }
  return <>{props.children}</>;
};

export default ConfigProvider;
