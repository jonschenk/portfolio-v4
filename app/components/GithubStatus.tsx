import { useState, useEffect } from "react";
import "./GitHubStatus.css";
import { IconBrandGithub } from "@tabler/icons-react";
import { Meteors } from "./ui/meteors";

function GitHubStatus() {
  const [gitHubStatus, setGitHubStatus] = useState<{
    repoName: string;
    createdAt: string;
    link: string;
  }>({ repoName: "", createdAt: "", link: "" });
  const [_, setError] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/jonschenk/events")
      .then((response) => response.json())
      .then((res) => {
        const lastEvent = res[0];
        if (lastEvent.repo.name === "jonschenk/portfolio-v4") {
          setGitHubStatus({
            repoName: "The portfolio site you are looking at now!",
            createdAt: new Date(lastEvent.created_at).toLocaleDateString(),
            link: "https://github.com/jonschenk/portfolio-v4",
          });
        } else {
          setGitHubStatus({
            repoName: lastEvent.repo.name,
            createdAt: new Date(lastEvent.created_at).toLocaleDateString(),
            link: "https://github.com/" + lastEvent.repo.name,
          });
        }
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="github-main relative shadow-xl bg-neutral-900 border border-gray-800  px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-end items-start">
      <div className="h-10 w-10 rounded-full border flex items-center justify-center mb-4 border-gray-500">
        <IconBrandGithub />
      </div>

      <h1 className="font-archivo-black">
        I was last seen (publicly) working on:
      </h1>
      <div className="github-desc font-archivo-black">
        <a
          id="status"
          href={gitHubStatus.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {gitHubStatus.repoName}
        </a>

        <p className="font-archivo-black text-slate-100">
          On {gitHubStatus.createdAt}
        </p>
      </div>

      <div className="github">
        <h2 className="font-archivo-black text-slate-100">
          You can check out my GitHub page{" "}
          <a id="gh" href="https://www.github.com/jonschenk" target="_blank">
            here
          </a>
        </h2>
      </div>

      {/* Meaty part - Meteor effect */}
      <Meteors number={20} />
    </div>
  );
}

export default GitHubStatus;
