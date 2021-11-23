import { Link, useLoaderData } from "remix";
import { getProjects } from "~/projects";

export let loader = () => {
  return getProjects();
};

function Projects() {
  let projects = useLoaderData();
  console.log(projects);
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link to={project.slug}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
