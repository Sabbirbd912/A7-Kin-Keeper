import React, { useContext } from "react";
import { CalledFriendContext } from "../../context/CalledFriendProvider";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";

const Timelinepage = () => {
  const { call } = useContext(CalledFriendContext);

  const getIcon = (type) => {
    switch (type) {
      case "Call":
        return <span className="text-yellow-500 text-2xl"><IoCallOutline /></span>; 
      case "Text":
        return <BsChatLeftText className="text-gray-400" size={24} />;
      case "Video":
        return <IoVideocamOutline className="text-gray-500" size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-4xl font-bold text-slate-800 mb-8">Timeline</h2>

      <div className="flex flex-col gap-4">
        {call.length === 0 ? (
          <p className="text-gray-500 italic">No interactions yet.</p>
        ) : (
          call.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 flex justify-center">
                {getIcon(item.interactionType)}
              </div>

              <div>
                <p className="text-gray-800"> 
                  <span className="text-gray-500 ml-1 font-medium">
                    {item.interactionType} with {item.name}
                  </span>
                </p>
                <p className="text-gray-400 text-sm font-medium mt-1">
                  {item.timestamp}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timelinepage;
