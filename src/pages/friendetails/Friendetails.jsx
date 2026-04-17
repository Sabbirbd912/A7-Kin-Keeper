import { useParams } from "react-router";
import useFriendsData from "../../hooks/useFriendsData";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";
import { CalledFriendContext } from "../../context/CalledFriendProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import { VscCopilotSnooze } from "react-icons/vsc";
import { FiArchive } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";

const Friendetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriendsData();

  const expectedFriend = friends?.find((friend) => String(friend.id) === id);

  // const [call, setCall] = useState([]);

  const { call, setCall } = useContext(CalledFriendContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  const handleAction = (type) => {
    const interactionData = {
      ...expectedFriend,
      interactionType: type,
      timestamp: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };
    setCall([...call, interactionData]);
    toast(`Clicked ${type}`);
  };
  console.log(expectedFriend);

  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col lg:flex-row justify-center items-start gap-8 min-h-screen">
      <div className="w-full lg:w-1/3 space-y-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <div className="relative">
            <img
              className="w-28 h-28 rounded-full object-cover border-4 border-gray-50 shadow-sm"
              src={expectedFriend?.picture}
              alt={expectedFriend?.name}
            />
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mt-4">
            {expectedFriend?.name}
          </h3>

          <div className="flex gap-2 mt-3">
            <span className="px-3 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full uppercase">
              {expectedFriend?.status || "Overdue"}
            </span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-bold rounded-full uppercase">
              {expectedFriend?.tags || "Family"}
            </span>
          </div>

          <p className="text-gray-500 italic mt-4 text-sm">
            "{expectedFriend?.description}"
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition shadow-sm font-medium">
           <VscCopilotSnooze /> Snooze 2 Weeks
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition shadow-sm font-medium">
          <FiArchive />  Archive
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl text-red-500 hover:bg-red-50 transition shadow-sm font-medium">
          <MdDeleteSweep /> Delete
          </button>
        </div>
      </div>

      <div className="w-full lg:flex-1 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard value={expectedFriend.days_since_contact} label="Days Since Contact" />
          <StatCard value={expectedFriend.goal_days} label="Goal (Days)" />
          <StatCard value={expectedFriend.next_due} label="Next Due" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center group">
          <div>
            <h2 className="text-lg font-bold text-slate-800">
              Relationship Goal
            </h2>
            <p className="text-slate-500 mt-1">
              Connect every{" "}
              <span className="font-bold text-slate-800">30 days</span>
            </p>
          </div>
          <button className="px-5 py-2 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition">
            Edit
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-slate-800 mb-6">
            Quick Check-In
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => handleAction("Call")}
              className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-100 bg-white rounded-2xl transition-all duration-200 hover:bg-gray-50 hover:border-gray-200 active:scale-95 active:bg-gray-100 shadow-sm group"
            >
              <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                <IoCallOutline size={24} />
              </span>
              <span className="text-sm font-semibold text-gray-700">Call</span>
            </button>

            <button
              onClick={() => handleAction("Text")}
              className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-100 bg-white rounded-2xl transition-all duration-200 hover:bg-gray-50 hover:border-gray-200 active:scale-95 active:bg-gray-100 shadow-sm group"
            >
              <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                <BsChatLeftText size={24} />
              </span>
              <span className="text-sm font-semibold text-gray-700">Text</span>
            </button>

            <button
              onClick={() => handleAction("Video")}
              className="flex flex-col items-center justify-center gap-2 p-4 border border-gray-100 bg-white rounded-2xl transition-all duration-200 hover:bg-gray-50 hover:border-gray-200 active:scale-95 active:bg-gray-100 shadow-sm group"
            >
              <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
                <IoVideocamOutline size={24} />
              </span>
              <span className="text-sm font-semibold text-gray-700">Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ value, label }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:border-blue-100 transition">
    <h2 className="text-3xl font-bold text-slate-700 leading-none">{value}</h2>
    <p className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-wide">
      {label}
    </p>
  </div>
);

const CheckInButton = ({ icon, label }) => (
  <button className="flex flex-col items-center justify-center gap-3 p-5 border border-gray-50 bg-gray-50/30 rounded-2xl hover:bg-white hover:border-blue-200 hover:shadow-md transition-all group">
    <div className="text-slate-600 group-hover:text-blue-500 transition-colors">
      {icon}
    </div>
    <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">
      {label}
    </span>
  </button>
);

export default Friendetails;
