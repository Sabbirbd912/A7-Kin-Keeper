import useFriendsData from "../../hooks/useFriendsData";
import { Link } from "react-router";

// const friendsPromise = fetch("/friends.json").then((res) => res.json());

const FriendsData = () => {
  // const friends = use(friendsPromise);
  // console.log(friends);

  const { friends, loading } = useFriendsData();
  console.log(friends, loading);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold py-2 ">
        Your Friends {friends.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <Link to={`/friends/${friend.id}`} key={friend.id} className="card bg-base-100 flex items-center justify-center shadow-sm">
            <figure>
              <img
                className="rounded-full p-4 w-25 h-25 object-cover"
                src={friend.picture}
                alt={friend.name}
              />
            </figure>

            <div className="card-body flex flex-col items-center justify-center">
              <h2 className="card-title">{friend.name}</h2>
              <p>{friend.days_since_contact} Days Ago</p>
              <div className="badge badge-secondary">{friend.status}</div>
              <div className="badge badge-primary">{friend.tags}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FriendsData;
