import React from "react";

const CountSection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div className="bg-white flex flex-col items-center justify-center shadow-lg rounded-md p-4">
        <h2 className="text-center font-semibold">10</h2>
        <p>Total Friends</p>
      </div>

      <div className="bg-white flex flex-col items-center justify-center shadow-md rounded-lg p-6">
        <h2 className="text-center font-semibold">10</h2>
        <p>On Track</p>
      </div>

      <div className="bg-white flex flex-col items-center justify-center shadow-md rounded-lg p-6">
        <h2 className="text-center font-semibold">10</h2>
        <p>Nedd Attention</p>
      </div>
      <div className="bg-white flex flex-col items-center justify-center shadow-md rounded-lg p-6   ">
        <h2 className="text-center font-semibold">10</h2>
        <p>Interactions This Month</p>
      </div>
    </div>
  );
};

export default CountSection;
