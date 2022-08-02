import { Job } from "../typings";

export const fetchJobs = async () => {
  const res = await fetch("http://localhost:8000/jobData");
  const data: Job = await res.json();
  console.log(data);
  console.log(data.Salary);
  return data.Salary;
};
