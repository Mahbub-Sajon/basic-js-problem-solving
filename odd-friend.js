// Problem-Four

function oddFriend(friends){

    
    // Checking whether even or odd 

    for(const friend of friends){
        if(friend.length % 2 != 0){
                
            // Error checking

            if(typeof friend != 'string'){
                return 'Please enter a valid input!';
            }
            return friend;
        }      
        }
    }
    
// Calling

const friendList = ['Raahim', 'Kaarim', 'Mahbub', 'Zaaved', 'Sajon', 'Jashim', 'Rasel', 'Koushik'];
const oddName = oddFriend(friendList);
console.log(oddName);