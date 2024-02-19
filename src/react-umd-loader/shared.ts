import EventEmitter from "eventemitter3";

const sharedKey = "__YSF_SHARED__";

/**
 * 创建全局共享
 */
export const makeShared = () => {
  return {
    eventBus: new EventEmitter(),
    pkgCache: Object.create(null),
  };
};

/**
 * 获取全局共享
 */
export const getShared = () => {
  return window[sharedKey] as ReturnType<typeof makeShared>;
};

/**
 * 确保全局共享初始化
 */
export const ensureShared = () => {
  const shared = getShared();
  if (shared) {
    return;
  }

  window[sharedKey] = makeShared();
};

/**
 * 加载远程组件包
 * @param libName
 * @param url
 * @returns
 */
export const preFetchLib = (libName: string, url: string) => {
  // 1、宿主 app 发起 preFetchLib（需要做一层缓存）
  const shared = getShared();
  if (shared.pkgCache[libName]) {
    return Promise.resolve(shared.pkgCache[libName]);
  }

  // 2、根据远程地址，执行远程 js 代码
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    script.onload = () => {};
    script.onerror = (e) => {
      reject(e);
    };

    shared.eventBus.once(`lib-ready:${libName}`, (components) => {
      shared.pkgCache[libName] = components;
      resolve(components);
    });

    document.head.appendChild(script);
  });
};

/**
 * 远程组件加载完毕
 * @param libName
 * @param components
 */
export const libReady = (libName: string, components: any) => {
  const shared = getShared();
  shared?.eventBus.emit(`lib-ready:${libName}`, components);
};

interface IReactRuntimeObj {
  /** 对应 react 库 */
  React: any;
  /** 对应 react-dom 库 */
  ReactDOM: any;
}

/**
 * 绑定 React 运行时
 */
export const bindReactRuntime = (runtimeObject: IReactRuntimeObj) => {
  (window as any).React = runtimeObject.React;
  (window as any).ReactDOM = runtimeObject.ReactDOM;
};
