import { Job } from "../typings";

export const fetchJobs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}jobData`);
  const data: Job = await res.json();
  const salary: number[] = data.Salary;

  return salary;
};
