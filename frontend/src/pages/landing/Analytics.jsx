import React, { useEffect, useState } from "react";

const Analytics = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/visitors/totalcount")
      .then((res) => res.json())
      .then((data) => setCount(data.totalVisitors))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <p>So far we have :{count} visitors</p>
    </div>
  );
};

export default Analytics;
