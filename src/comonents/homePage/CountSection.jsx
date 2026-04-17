import React, { useContext } from "react";
import useFriendsData from "../../hooks/useFriendsData";
import { CalledFriendContext } from "../../context/CalledFriendProvider";

const CountSection = () => {
  const { friends } = useFriendsData();
  const { call } = useContext(CalledFriendContext);

  const totalFriends = friends?.length || 0;

  const onTrackFriends =
    friends?.filter((f) => f.status === "On-Track").length || 0;

  const needAttention =
    friends?.filter((f) => f.status === "Overdue" || f.status === "Almost Due")
      .length || 0;

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const interactionsThisMonth = call.filter((item) => {
    const itemDate = new Date(item.timestamp);
    return (
      itemDate.getMonth() === currentMonth &&
      itemDate.getFullYear() === currentYear
    );
  }).length;

  const stats = [
    { label: "Total Friends", count: totalFriends },
    { label: "On Track", count: onTrackFriends },
    { label: "Need Attention", count: needAttention },
    { label: "Interactions This Month", count: interactionsThisMonth },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white flex flex-col items-center justify-center shadow-sm border border-gray-100 rounded-xl p-8 transition-all hover:shadow-md"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-2">
            {stat.count}
          </h2>
          <p className="text-slate-500 font-medium text-sm text-center">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountSection;
