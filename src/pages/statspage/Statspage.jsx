import React, { useContext } from "react";
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { CalledFriendContext } from "../../context/CalledFriendProvider";

const Statspage = () => {
  const { call } = useContext(CalledFriendContext);

  const totalCalls = call.filter(
    (item) => item.interactionType === "Call",
  ).length;
  const totalTexts = call.filter(
    (item) => item.interactionType === "Text",
  ).length;
  const totalVideos = call.filter(
    (item) => item.interactionType === "Video",
  ).length;

  const data = [
    { name: "call", value: totalCalls, color: "#0088FE" },
    { name: "Text", value: totalTexts, color: "#00C49F" },
    { name: "Video", value: totalVideos, color: "#FFBB28" },
  ];

  if (call.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-xl m-4">
        <p className="text-gray-400">No data available to show analytics.</p>
        <p className="text-xs text-gray-300">
          Interact with friends to see stats!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Friendship Analytics</h2>

      <div className="h-75 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius="70%"
              outerRadius="100%"
              paddingAngle={8}
              dataKey="value"
              isAnimationActive={true}
              cornerRadius={10}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <span>
              {item.name}: {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statspage;
