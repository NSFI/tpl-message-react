# 网易七鱼自定义消息组件开发

## 快速开始

依赖安装

```
pnpm install
```

本地开发

```
pnpm run dev
```

编译打包

```
pnpm run build
```

## 访问链接

```
http://localhost:5173/?k=xxxxxx&templateId=xxxxxx
```

- k：企业 appKey
- templateId：访客端模版 id

## 配置介绍 .env

```sh
# 插件宿主环境，不需要做修改
MODE=online
# 企业 appKey，从客服工作台获取
APPKEY=
# 访客端模版 id，从客服工作台获取
templateId=
```

## 目录结构

```
├── README.md
├── package.json
├── index.html
├── dist                      // 编译输出目录
├── .env                      // 配置文件，用于指定企业 appKey、访客端模版id
├── src
│   ├── mock.json             // 本地开发 mock 数据
│   ├── index.tsx             // 自定义组件注册入口
│   ├── CustomMessage.tsx     // 自定义消息组件
│   ├── CustomMessage.less    // 自定义消息组件样式
│   ├── components
│   │   ├── ConfigProvider    // 模版配置同步组件
│   │   └── LayoutCanvas      // 布局模拟器组件
│   ├── preview.tsx           // 本地开发预览页面
│   ├── react-umd-loader      // umd 核心包
│   ├── remote                // 打包结果调试
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts            // dev 开发配置
└── vite.config.umd.ts        // build 打包配置
```

## CustomMessage 组件说明

```ts
type Props = {
  content: {
    data: any; // 数据同 ysf('customMessage') 中配置的 data
    description: string; // 数据同 ysf('customMessage') 中配置的 description
  };
};
```

sdk 配置自定义消息组件

```js
ysf('customMessage', {
  type: 'customMessage', // 这里是消息的类型的枚举， 定义在什么场景发生此消息
  data: { // 用户自定义数据，格式 any
    title: 'hello world'
  },
  description: '自定义消息', //  必填，非访客端展示该字段
  sendByUser: 0, // 0 进线自动发送，1 手动发送  默认0
  actionText: '',// 发送按钮文案
  actionTextColor: '', // 发送按钮颜色
  hideAction: 0, // 是否展示action按钮 默认0，sendByUser=1的时候会展示发送卡片按钮
  succsess: () => {}
  error: () => {}
})
```

## 样式主题

组件开发可用的 css variable 变量，由宿主环境（访客端）自动注入

```
'--ysf-color-primary'     // 主题色
'--ysf-color-on-primary'  // 主题色-文本叠加色
'--ysf-color-fore'        // 次要色
'--ysf-color-on-fore'     // 次要色-文本叠加色
'--ysf-color-border'      // 边框颜色
'--ysf-color-tip'         // 提示颜色
'--ysf-color-placeholder' // 输入框暗纹颜色
'--ysf-color-success'     // 成功颜色
'--ysf-color-warning'     // 危险颜色
'--ysf-color-danger'      // 失败颜色
```