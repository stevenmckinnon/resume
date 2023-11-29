import * as React from "react"
import { format } from "date-fns"
import { Job, Education } from "../../interfaces"
import { Element } from "react-scroll"

interface Props {
  work: Job[]
  education: Education[]
  skills: string[]
}

const formatDates = (fromDate: string, toDate: string): string => {
  const from = format(new Date(fromDate.substring(0, 10)), "MMMM yyyy")
  const to = toDate
    ? format(new Date(toDate.substring(0, 10)), "MMMM yyyy")
    : "Present"
  return `${from} - ${to}`
}

const Resume: React.FC<Props> = ({ work, education, skills }) => (
  <Element name="resume" className="bg-slate-50 pt-8 pb-8">
    <section id="resume" className="flex flex-col items-center">
      <div className="flex flex-col md:grid grid-cols-3 p-7 md:p-10 gap-6 max-w-4xl">
        <div className="col-span-1 flex justify-center">
          <h1 className="h-min text-2xl text-dark pb-1 border-b-4 border-teal-300 uppercase font-heading">
            Work
          </h1>
        </div>
        <div className="col-span-2">
          {work.map((job) => (
            <div key={job.fromDate} className="mb-8 flex flex-col gap-1">
              <h3 className="text-2xl text-primary font-bold font-body">
                {job.company}
              </h3>
              <h4 className="text-primary font-semibold font-body text-gray-500">
                {job.jobTitle} <span>•</span>{" "}
                <em className="date">{formatDates(job.fromDate, job.toDate)}</em>
              </h4>
              <p className="text-primary  font-body">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:grid grid-cols-3 p-7 md:p-10 gap-6 max-w-4xl">
        <div className="col-span-1 flex justify-center">
          <h1 className="h-min text-2xl text-dark pb-1 border-b-4 border-teal-300 uppercase font-heading">
            Education
          </h1>
        </div>
        <div className="col-span-2">
          {education.map((school) => (
            <div key={school.name} className="mb-8 flex flex-col gap-1">
              <div className="twelve columns">
                <h3 className="text-2xl text-primary font-bold font-body">
                  {school.name}
                </h3>
                <h4 className="text-primary font-semibold font-body text-gray-500">
                  {school.course}
                  <span> • </span>
                  <em className="date">
                    {formatDates(school.fromDate, school.toDate)}
                  </em>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:grid grid-cols-3 p-7 md:p-10 pb-16 gap-6 max-w-4xl">
        <div className="col-span-1 flex justify-center">
          <h1 className="h-min text-2xl text-dark pb-1 border-b-4 border-teal-300 uppercase font-heading">
            Skills
          </h1>
        </div>
        <div className="col-span-2">
          <div className="flex flex-wrap justify-center items-center gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-teal-300 text-dark rounded-3xl p-4 font-body min-w-[100px]"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Element>
)

export default Resume
