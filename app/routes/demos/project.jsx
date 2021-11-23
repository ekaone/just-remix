import { Outlet } from "remix";

import stylesUrl from "~/styles/demos/about.css";

export let meta = () => {
  return {
    title: "About Project",
  };
};

export let links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <div className="about">
      <div className="about__intro">
        <h2>About Project</h2>
        <hr />
        <Outlet />
      </div>
    </div>
  );
}
