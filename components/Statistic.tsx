import { useState } from "react";
import { Job } from "../typings";
import { fetchJobs } from "../utils/getSalary";

export async function Statistic() {
  const [salary, SetSalary] = useState<number[]>();

  SetSalary(await fetchJobs());

  if (!salary) {
    console.log(salary);
    return (
      <div>
        <div>
          {salary.map((items) => {
            <div>{items}</div>;
          })}
        </div>
        <div>Test statistic</div>
      </div>
    );
  }
}
