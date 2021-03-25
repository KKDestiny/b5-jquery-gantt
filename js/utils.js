/*
 * @Author: linxiaozhou.com
 * @LastEditors: linxiaozhou.com
 * @Description: file content
 */
const genSources = (raw) => {
  const converted = [];

  const list = {};
  for (let section of raw) {
    const tasks = section.tasks;
    Object.assign(list, { ...tasks });
  }

  for (let section of raw) {
    const tasks = section.tasks;
    Object.entries(tasks).reduce((temp, [taskId, task], index) => {
      if (task.after) {
        const refTask = list[task.after];
        const refDate = new Date(refTask.to);

        // 计算开始
        refDate.setDate(refDate.getDate());
        task.from = refDate.valueOf();

        // 计算结束
        const period = task.period || "";
        if (period.indexOf("d") > -1) {
          refDate.setDate(
            refDate.getDate() + Number(period.replace("d", "") || 0)
          );
        }
        if (period.indexOf("h") > -1) {
          refDate.setHours(
            refDate.getHours() + Number(period.replace("d", "") || 0)
          );
        }
        task.to = refDate.valueOf();
      }
      temp.push({
        name: index === 0 ? section.section : "",
        desc: task.name,
        values: [
          {
            from: `/Date(${new Date(task.from).getTime()})/`,
            to: `/Date(${new Date(task.to).getTime()})/`,
            label: task.name,
            customClass: "ganttRed",
            dataObj: {
              from: task.from,
              from: task.to,
            },
          },
        ],
      });
      // console.log(taskId, task);
      return temp;
    }, converted);
  }

  return converted;
};
