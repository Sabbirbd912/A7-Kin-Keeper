import React from "react";

const HeadSection = () => {
  return (
    <div className="text-center py-12 px-4 container mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
        Friends to keep close in your life
      </h2>
      <p className="text-md md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="bg-[#244D3F] hover:bg-[#1b3a30] text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all active:scale-95 flex items-center gap-2 mx-auto">
        <span className="text-xl">+</span> Add a Friend
      </button>
    </div>
  );
};

export default HeadSection;
