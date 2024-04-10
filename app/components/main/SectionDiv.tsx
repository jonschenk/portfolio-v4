import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import "./SectionDiv.css";

interface SectionDivProps {
  words: string;
}

export default function SectionDiv({ words }: SectionDivProps) {
  return (
    <div className="sectiondiv-container">
      <TextGenerateEffect words={words} />
      <hr className="border-white mb-8 m-auto" />
    </div>
  );
}
