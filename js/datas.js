/*
 * @Author: linxiaozhou.com
 * @LastEditors: linxiaozhou.com
 * @Description: file content
 */
/**
 * INPUT
 * const input = `
 * section 辅助工作--业务培训
 * 业务了解 : des7, 2021-03-14, 2021-03-15
 * 业务讨论 : des8, 2021-03-14, 2021-03-15

 * section 辅助工作--技术培训
 * 代码规范 : des1, 2021-03-14, 2021-03-15
 * 错误码规范 : des2, 2021-03-14, 2021-03-15
 * 版本管理 : des3, 2021-03-14, 2021-03-15
 * 代码提交流程 : des4,   after des1,  1d
 * 单元测试规范 : des5,  after des1, 1d
 * 集成测试规范: des6,  after des1, 1d
 * `;
 * 
 * ---------------------------------------------
 * 
 * OUTPUT:
 * const output = [
 *   // Section 1
 *   {
 *     section: "辅助工作--业务培训",
 *     tasks: {
 *       des7: { name: "业务了解", from: "2021-03-14", to: "2021-03-15", },
 *       des8: { name: "业务讨论", from: "2021-03-14", to: "2021-03-15", },
 *     },
 *   },
 * 
 *   // Section 2
 *   {
 *     section: "辅助工作--技术培训",
 *     tasks: {
 *       des1: { name: "代码规范", from: "2021-03-14", to: "2021-03-15", },
 *       des2: { name: "错误码规范", from: "2021-03-14", to: "2021-03-15", },
 *       des3: { name: "版本管理", from: "2021-03-14", to: "2021-03-15", },
 *       des4: { name: "代码提交流程", after: "des1", period: "1d" },
 *       des5: { name: "单元测试规范", after: "des1", period: "1d" },
 *       des6: { name: "集成测试规范", after: "des1", period: "1d" },
 *     },
 *   },
 * ];
 */
const Flags = {
  common: "通用",
  backend: "后端",
  frontend: "前端",
  test: "测试",
  others: "其他",
};
const ConvertText2Data = (text) => {
  return [
    // Section 1
    {
      section: "辅助工作--业务培训",
      tasks: {
        des7: {
          flag: Flags.common,
          name: "业务了解",
          from: "2021-03-14",
          to: "2021-03-15",
        },
        des8: {
          flag: Flags.common,
          name: "业务讨论",
          from: "2021-03-14",
          to: "2021-03-15",
        },
      },
    },

    // Section 2
    {
      section: "辅助工作--技术培训",
      tasks: {
        des1: {
          flag: Flags.backend,
          name: "代码规范",
          from: "2021-03-14",
          to: "2021-03-15",
        },
        des2: {
          flag: Flags.backend,
          name: "错误码规范",
          from: "2021-03-14",
          to: "2021-03-15",
        },
        des3: {
          flag: Flags.backend,
          name: "版本管理",
          from: "2021-03-14",
          to: "2021-03-15",
        },
        des4: {
          flag: Flags.backend,
          name: "代码提交流程",
          after: "des1",
          period: "1d",
        },
        des5: {
          flag: Flags.backend,
          name: "单元测试规范",
          after: "des1",
          period: "1d",
        },
        des6: {
          flag: Flags.backend,
          name: "集成测试规范",
          after: "des1",
          period: "1d",
        },
      },
    },
  ];
};

const Sources = ConvertText2Data();
