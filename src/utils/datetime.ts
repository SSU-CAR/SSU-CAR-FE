import { format } from "date-fns";

//요일 한글로 반환
export const getDayName = (date: Date) => {
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const dayName = dayNames[date.getDay()];
  return dayName;
};

//yyyy년 M월 dd일 (d) 반환
export const getDateString = (date: string) => {
  const string = format(new Date(date), "yyyy년 M월 dd일 ");
  const dayName = getDayName(new Date(date));
  return string + "(" + dayName + ")";
};
