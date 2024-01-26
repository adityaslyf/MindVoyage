import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";

const Profile = () => {


    useEffect(() => {
        const fetchUserProfile = async () => {
          try {
            const response = await fetch('/api/profile/123'); // Replace 123 with actual user ID
            const userData = await response.json();
            setUser(userData);
          } catch (error) {
            console.error('Error fetching user profile:', error);
          }
        };
    
        fetchUserProfile();
      }, []);

  return (
    <div className="flex flex-row bg-[#141627] overflow-hidden w-[100vw] h-[100vh]">
      <div>
        <Sidebar />
      </div>
      <div className="border-white border-4 w-[80vw] m-10 rounded-lg overflow-y-scroll">
        <div className="w-full max-w-2xl mx-auto p-4 md:p-6 lg:p-8">
          <section className="flex flex-col items-center space-y-6">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                UN
              </span>
            </span>
            <h2 className="text-2xl font-bold">Username</h2>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Bio: Avid traveler and adventure seeker. Always looking for the
              next place to explore.
            </p>
          </section>
          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              Favorite Destinations
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="p-4">
                  <img
                    src="/placeholder.svg"
                    width={200}
                    height={200}
                    alt="Destination 1"
                    className="w-full h-32 object-cover rounded-md"
                    style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
                  />
                  <h4 className="mt-4 text-lg font-semibold">Destination 1</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Some details about Destination 1.
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="p-4">
                  <img
                    src="/placeholder.svg"
                    width={200}
                    height={200}
                    alt="Destination 2"
                    className="w-full h-32 object-cover rounded-md"
                    style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
                  />
                  <h4 className="mt-4 text-lg font-semibold">Destination 2</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Some details about Destination 2.
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="p-4">
                  <img
                    src="/placeholder.svg"
                    width={200}
                    height={200}
                    alt="Destination 3"
                    className="w-full h-32 object-cover rounded-md"
                    style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
                  />
                  <h4 className="mt-4 text-lg font-semibold">Destination 3</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Some details about Destination 3.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
