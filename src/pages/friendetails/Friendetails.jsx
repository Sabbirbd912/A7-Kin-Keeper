
import { useParams } from 'react-router';
import useFriendsData from '../../hooks/useFriendsData';

const Friendetails = () => {
    const { id } = useParams();
    console.log(id);

    const {friends, loading} = useFriendsData();

    const expectedFriend = friends.find(friend => String(friend.id) === id);

    console.log(friends, loading);
    console.log(expectedFriend);

    return (
        <div>
            <h3>{expectedFriend?.name}</h3>
            <img src={expectedFriend?.picture} alt={expectedFriend?.name} />
            <p>{expectedFriend?.bio}</p>
        </div>
    );
};

export default Friendetails;