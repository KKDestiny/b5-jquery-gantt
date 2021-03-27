# b5-jquery-gantt

a gantt page base on jquery for bridge5 asia
![image](https://user-images.githubusercontent.com/13687360/108799234-be363800-75ca-11eb-8411-45b830cb4533.png)

> Read this link for original information:
> https://www.jq22.com/demo/jquery-Gantt20151112/

## Gantt For Markdown

Reference:

> https://www.yuque.com/yuque/help/mermaid#732e8fd1

Input:

```plaintext
gantt
axisFormat %m-%d
dateFormat  YYYY-MM-DD
title 甘特图示例
excludes weekends

section 业务培训
业务了解 : done, des7, 2021-03-18, 2021-03-19
业务讨论 : done,des8, 2021-03-18, 2021-03-19

section 技术培训
代码规范 : des1, 2021-03-18, 2021-03-19
错误码规范 : des2, 2021-03-18, 2021-03-19
版本管理 : des3, 2021-03-18, 2021-03-19
代码提交流程 : des4,   after des1,  1d
单元测试规范 : des5,  after des1, 1d
集成测试规范: des6,  after des1, 1d
```

output:

```javascript
[
  {
    section: "默认section",
    tasks: {},
  },
  {
    section: "业务培训",
    tasks: {
      des7: {
        name: "业务了解",
        done: true,
        from: "2021-03-18",
        to: "2021-03-19",
      },
      des8: {
        name: "业务讨论",
        done: true,
        from: "2021-03-18",
        to: "2021-03-19",
      },
    },
  },
  {
    section: "技术培训",
    tasks: {
      des1: {
        name: "代码规范",
        from: "2021-03-18",
        to: "2021-03-19",
      },
      des2: {
        name: "错误码规范",
        from: "2021-03-18",
        to: "2021-03-19",
      },
      des3: {
        name: "版本管理",
        from: "2021-03-18",
        to: "2021-03-19",
      },
      des4: {
        name: "代码提交流程",
        after: "des1",
        period: "1d",
      },
      des5: {
        name: "单元测试规范",
        after: "des1",
        period: "1d",
      },
      des6: {
        name: "集成测试规范",
        after: "des1",
        period: "1d",
      },
    },
  },
];
```
