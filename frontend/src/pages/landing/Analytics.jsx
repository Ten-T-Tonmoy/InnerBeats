import React, { useEffect, useRef } from "react";

const Analytics = () => {
  const userCountRef = useRef(null);
  const volunteerCountRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/visitors/totalcount")
      .then((res) => res.json())
      .then((data) => {
        if (userCountRef.current) {
          userCountRef.current.textContent = data.totalVisitors;
        }
      })
      .catch((err) => console.error(err));

    fetch("http://localhost:3000/api/user/usercount")
      .then((res) => res.json())
      .then((data) => {
        if (volunteerCountRef.current) {
          volunteerCountRef.current.textContent = data.totalVolunteers;
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <div
        className="bg-white shadow-md rounded-md p-6 flex flex-col 
      items-center justify-center"
      >
        <h2 className="text-xl font-semibold text-footer mb-2">
          Total Volunteers
        </h2>
        <p
          ref={volunteerCountRef}
          className="text-3xl font-bold text-secondary"
        >
          Loading...
        </p>
      </div>

      <div
        className="bg-white shadow-md rounded-md p-6 flex flex-col
       items-center justify-center"
      >
        <h2 className="text-xl font-semibold text-secondary mb-2">
          Site Viewed
        </h2>
        <p ref={userCountRef} className="text-3xl font-bold text-footer">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Analytics;
