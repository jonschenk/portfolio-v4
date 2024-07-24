import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import "./WorkExperience.css";

export function WorkExperience() {
  return (
    <div className="experience-container">
      <CardContainer className="inter-var">
        <CardBody className="work-card bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border font-archivo-black uppercase">
          <CardItem
            translateZ="60"
            className="text-l font-bold text-neutral-600 dark:text-white"
          >
            Nine Peaks Solutions
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className=" text-xs max-w-sm mt-2 uppercase"
          >
            Software Engineer Intern
          </CardItem>

          <CardItem
            as="p"
            translateZ="40"
            className="text-slate-500 text-xs max-w-sm mt-4 uppercase"
          >
            Developed software utility using .NET framework and C#, optimizing tasks within the company<br /><br />
            Increased productivity by over 200% using Python script automation to replace monotonous tasks<br /><br />
            Entrusted with sensitive data and managed file systems with over 100,000 documents
            <br />
          </CardItem>

          <br />
          <hr className="border-t-[1px] border-slate-500 my-2" />
          <div className="tags-container flex flex-wrap">
            <CardItem
              as="p"
              translateZ="40"
              className="text-slate-500 mt-2 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black"
            >
              Microsoft .NET (C#)
            </CardItem>
            <CardItem
              as="p"
              translateZ="40"
              className="text-slate-500 mt-2 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black"
            >
              Python
            </CardItem>
            <CardItem
              as="p"
              translateZ="40"
              className="text-slate-500 mt-2 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black"
            >
              Document Management Systems
            </CardItem>
            <CardItem
              as="p"
              translateZ="40"
              className="text-slate-500 mt-2 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black"
            >
              Javascript
            </CardItem>
          </div>
          <div className="flex justify-between items-center mt-20"></div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="work-card bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border font-archivo-black uppercase ">
          <CardItem
            translateZ="60"
            className="text-l font-bold text-neutral-600 dark:text-white"
          >
            Tanoshi Kids Computers
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className=" text-xs max-w-sm mt-2 uppercase"
          >
            Software Engineer Intern
          </CardItem>

          <CardItem
            as="p"
            translateZ="40"
            className="text-slate-500 text-xs max-w-sm mt-4 uppercase"
          >
            Performed quality assurance testing and researched software design
            to enhance product integrity
            <br />
            <br />
            Analyzed and visualized data for processed units using Python and
            Google Cloud API, revealing key insights
          </CardItem>

          <br />

          <hr className="border-t-[1px] border-slate-500 my-2" />
          <div className="tags-container flex flex-wrap">
            <CardItem
              as="p"
              translateZ="40"
              className="text-slate-500 mt-2 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black"
            >
              Quality Assurance
            </CardItem>

            <CardItem
              as="p"
              translateZ="40"
              className="text-slate-500 mt-2 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black"
            >
              Python
            </CardItem>
            <CardItem
              as="p"
              translateZ="40"
              className="text-slate-500 mt-2 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black"
            >
              Google Cloud API
            </CardItem>
          </div>
          <div className="flex justify-between items-center mt-11"></div>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody className="work-card bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border font-archivo-black uppercase ">
          <CardItem
            translateZ="60"
            className="text-l font-bold text-neutral-400 dark:text-white"
          >
            George Fox University
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className=" text-xs max-w-sm mt-2 uppercase"
          >
            Programming Lab Aide
          </CardItem>

          <CardItem
            as="p"
            translateZ="40"
            className="text-slate-500 text-xs max-w-sm mt-4 uppercase"
          >
            Tutoring over 70 students, empowering them to bolster their coding
            skills and surmount technical obstacles
            <br />
            <br />
            Providing comprehensive clarification and guidance on intricate
            lecture materials and assignments
          </CardItem>

          <br />

          <hr className="border-t-[1px] border-slate-500 my-2" />
          <div className="tags-container flex flex-wrap">
            <CardItem
              as="p"
              translateZ="40"
              className="text-slate-500 mt-2 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black"
            >
              Tutoring
            </CardItem>

            <CardItem
              as="p"
              translateZ="40"
              className="text-slate-500 mt-2 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black"
            >
              Python
            </CardItem>
            <CardItem
              as="p"
              translateZ="40"
              className="text-slate-500 mt-2 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black"
            >
              Java
            </CardItem>
            <CardItem
              as="p"
              translateZ="40"
              className="text-slate-500 mt-2 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black"
            >
              Scala
            </CardItem>
            <CardItem
              as="p"
              translateZ="40"
              className="text-slate-500 mt-2 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black"
            >
              C++
            </CardItem>
          </div>

          <div className="flex justify-between items-center mt-20"></div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
