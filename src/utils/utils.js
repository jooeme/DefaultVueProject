const oneDay = 86400000; //一天1000*60*60*24毫秒

//格式化日期
function formatDate(date, zw = false) {
  let y = date.getFullYear(),
    m = date.getMonth() + 1,
    d = date.getDate();
  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  if (zw) {
    return `${y}年${m}月${d}日`;
  } else {
    return `${y}-${m}-${d}`;
  }
}

//获取当天时间
export const getToday = function(flag) {
  if (flag === "zw") {
    return formatDate(new Date(), true);
  } else {
    return formatDate(new Date());
  }
};

//获取当前星期
export const getWeek = function(day) {
  let date = day === undefined ? new Date() : new Date(day);
  let sz = date.getDay();
  let zw = "日一二三四五六".charAt(sz);
  return { sz, zw };
};

//获取当前月的第一天和最后一天
export const getCurMonth = function(day) {
  let date = day === undefined ? new Date() : new Date(day);
  let currentMonth = date.getMonth();
  let nextMonth = ++currentMonth;
  let nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
  let lastDay = formatDate(new Date(nextMonthFirstDay - oneDay));
  date.setDate(1);
  let firstDay = formatDate(date);
  return { lastDay, firstDay };
};

//获取本周的第一天和最后一天
export const getCurWeek = function(day) {
  let date = day === undefined ? new Date() : new Date(day);
  let first = date - (date.getDay() - 1) * oneDay;
  let last = first + oneDay * 6;
  let lastDay = formatDate(new Date(last));
  let firstDay = formatDate(new Date(first));
  return { lastDay, firstDay };
};

//获取时间区间内每一天
export const getEveryDay = function(startTime, endTime = new Date()) {
  let days = [];
  for (let i = Date.parse(startTime); i <= Date.parse(endTime); i += oneDay) {
    let day = formatDate(new Date(i));
    days.push(day);
  }
  return days;
};

//获取最近第几天
export const getTargetDay = function(day = 0, n) {
  //n表示最近几天，负数为day前几天, 默认为当天时间
  let date;
  if (n === undefined) {
    n = day;
    date = new Date();
  } else {
    date = new Date(day);
  }
  let targetDay = formatDate(new Date(date.getTime() + oneDay * n));
  return targetDay;
};
