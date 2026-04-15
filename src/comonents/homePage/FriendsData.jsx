import React, { use } from "react";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const FriendsData = () => {
  const friends = use(friendsPromise);
  console.log(friends);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold py-2 ">
        Your Friends {friends.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {friends.map((friend) => (
          <div className="card bg-base-100 flex items-center justify-center shadow-sm">
            <figure>
              <img
                className="rounded-full w-[100px] h-[100px] object-cover"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>

            <div className="card-body flex flex-col items-center justify-center">
              <h2 className="card-title">{friend.name}</h2>
              <p>15 Days</p>
              <div className="badge badge-secondary">NEW</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsData;
