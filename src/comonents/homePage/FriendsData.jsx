import useFriendsData from "../../hooks/useFriendsData";
import { Link } from "react-router";

const FriendsData = () => {
  const { friends, loading } = useFriendsData();

  if (loading) return <div className="text-center py-10 font-bold">Loading Friends...</div>;

  return (
    <div className="container mx-auto p-4 mb-10">
      <h2 className="text-xl font-bold text-slate-800 mb-6 px-2">
        Your Friends
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <Link 
            to={`/friends/${friend.id}`} 
            key={friend.id} 
            className="group bg-white flex flex-col items-center justify-center p-6 shadow-sm border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300"
          >
            <div className="relative mb-4">
               <img
                className="rounded-full w-20 h-20 object-cover border-2 border-gray-50 shadow-sm transition-transform group-hover:scale-105"
                src={friend.picture}
                alt={friend.name}
              />
            </div>

            <div className="text-center space-y-1">
              <h2 className="text-lg font-bold text-slate-800">{friend.name}</h2>
              <p className="text-xs font-semibold text-gray-400">{friend.days_since_contact}d ago</p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    friend.status === 'Overdue' ? 'bg-red-100 text-red-600' : 
                    friend.status === 'Almost Due' ? 'bg-orange-100 text-orange-600' : 
                    'bg-green-100 text-green-600'
                }`}>
                  {friend.status}
                </span>

                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {friend.tags}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FriendsData;