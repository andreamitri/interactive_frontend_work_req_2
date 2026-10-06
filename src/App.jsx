import {
  NavLink,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Settings from "./pages/Settings";
import Preview from "./pages/Preview";
import usePreferences from "./hooks/usePreferences";

function Layout() {
  const { preferences, updatePreference } = usePreferences();

  return (
    <div>
      <header>
        <h1>Preference Dashboard</h1>

        <nav>
          <NavLink to="/">Settings</NavLink>
          <NavLink to="/preview">Preview</NavLink>
        </nav>
      </header>

      <main>
        <Outlet context={{ preferences, updatePreference }} />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Settings />,
      },
      {
        path: "preview",
        element: <Preview />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
