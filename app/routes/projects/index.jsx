import { Link, useLoaderData } from "remix";

export let loader = () => {
  return [
    {
      slug: "my-first-project",
      title: "My First Project",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You",
    },
  ];
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
