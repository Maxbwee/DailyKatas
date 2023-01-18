
const friend = [];
substring = "he";


const bestFriend = () => {
    friend.push("he", "headed", "west");

    console.log(friend)

    const checkArray = friend.find(element => {
        if(element.includes(substring)) {
            return true;
        }
    });

    console.log(checkArray)
}

bestFriend()