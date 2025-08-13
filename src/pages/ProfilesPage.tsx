import { Link, Outlet } from "react-router-dom";

export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        {profiles.map((profile) => (
          <Link key={profile} to={`/profiles/${profile}`}>
            Profile: {profile}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
