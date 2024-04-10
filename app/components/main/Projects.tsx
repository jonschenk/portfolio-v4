"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import "./Projects.css";

export function Projects() {
  return (
    <div className="projects-container">
      {/* Project 1 */}
      <a href="https://jonschenk.github.io/C-GoL/" target="_blank">
        <PinContainer
          title="jonschenk.github.io/C-GoL"
          href="https://jonschenk.github.io/C-GoL/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 font-archivo-black uppercase">
              Conway's Game of Life
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 font-archivo-black">
                A web-based implementation of Conway's Game of Life.
              </span>
              <hr className="border-t-[1px] border-slate-500 my-2" />
              <span className="text-slate-500 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black">
                Typescript
              </span>
              <span className="text-slate-500 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black">
                Node.js
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-emerald-400 via-sky-500 to-cyan-500" />
          </div>
        </PinContainer>
      </a>

      {/* Project 2 */}
      <a href="https://github.com/jonschenk/resonance" target="_blank">
        <PinContainer title="github.com/jonschenk/resonance">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 font-archivo-black uppercase">
              Resonance
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 font-archivo-black">
                Created a landing page and file submission system for a client's
                music collective service
                <br />
                <hr className="border-t-[1px] border-slate-500 my-2" />
                <span className="text-slate-500 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black">
                  React.js
                </span>
                <span className="text-slate-500 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black">
                  Node.js
                </span>
                <span className="text-slate-500 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black">
                  Typescript
                </span>
                <span className="text-slate-500 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black">
                  Firebase
                </span>
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-pink-500 via-pink-500 to-cyan-300" />
          </div>
        </PinContainer>
      </a>

      {/* Project 3 */}
      <a href="https://github.com/jonschenk/n-queens" target="_blank">
        <PinContainer title="github.com/jonschenk/n-queens">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 font-archivo-black uppercase">
              N-Queens Genetic Algorithm
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 font-archivo-black">
                Genetic algorithm-based search for a solution to the n-queens
                problem.
              </span>
              <br />
              <hr className="border-t-[1px] border-slate-500 my-2" />
              <span className="text-slate-500 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black">
                Python
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-yellow-500 via-red-500 to-blue-500" />
          </div>
        </PinContainer>
      </a>

      {/* Project 4 */}
      <a href="https://github.com/jonschenk/Prusa-Firmware" target="_blank">
        <PinContainer title="github.com/jonschenk/Prusa-Firmware">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 font-archivo-black uppercase">
              Prusa 3D Printer Retrofit Firmware Modification
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 font-archivo-black">
                Modified and built and tested C-based firmware for a Prusa 3D
                Printer
              </span>
              <br />
              <hr className="border-t-[1px] border-slate-500 my-2" />
              <span className="text-slate-500 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black">
                C
              </span>

              <span className="text-slate-500 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black">
                Embeded Software
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-sky-500 via-purple-500 to-sky-500" />
          </div>
        </PinContainer>
      </a>

      {/* Project 5 */}
      <a
        href="https://github.com/jonschenk/Nutrition-Tracker-App"
        target="_blank"
      >
        <PinContainer title="github.com/jonschenk/Nutrition-Tracker-App">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 font-archivo-black uppercase">
              Nutrition Tracker App
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 font-archivo-black">
                A simple nutrition tracker iOS app that tracks daily macros.
              </span>
              <br />
              <hr className="border-t-[1px] border-slate-500 my-2" />
              <span className="text-slate-500 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black">
                Swift
              </span>
              <span className="text-slate-500 text-xs border rounded-lg p-1 border-slate-500 mr-2 font-archivo-black">
                SwiftUI
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-sky-500 via-green-500 to-blue-500" />
          </div>
        </PinContainer>
      </a>
    </div>
  );
}
