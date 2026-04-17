import React, { useEffect } from "react";

const useFriendsData = () => {
  const [friends, setFriends] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();

      setTimeout(() => {
        setFriends(data);
        setLoading(false);
      }, 100);
    };

    fetchFriends();
  }, []);
  return { friends, loading };
};

export default useFriendsData;
