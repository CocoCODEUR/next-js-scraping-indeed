import { time } from "console";
import { useEffect, useState } from "react";
import { Job } from "../typings";
import { fetchJobs } from "../utils/getSalary";

export function Statistic() {
  const [salary, setSalary] = useState<number[]>();

  useEffect(() => {
    const fetchSalary = async () => {
      setSalary(await fetchJobs());
    };
    fetchSalary().catch(console.error);
  }, []);

  if (!salary) {
    return <span>Loading....</span>;
  }

  return (
    <div>
      <ul>
        {salary.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>Test statistic</div>
    </div>
  );
}
