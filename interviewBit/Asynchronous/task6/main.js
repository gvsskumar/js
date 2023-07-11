// You have 2 function which returns promises.Map data from users and userStatuses to get array of user with id,name,isActive

const users =[
    {id:1,
     name:"venkata",
    },
    {id:2,
     name:"satya",
    },
    {id:3,
     name:"surya",
    },
    {id:4,
     name:"kumar",
    },

];

const userStatus =[
    {id:1,
    isActive:true,
    },
    {id:2,
        isActive:false,
    },
    {id:3,
        isActive:false,
    },
    {id:4,
        isActive:true,
    }
]


const getUsers = () =>{
    return new Promise((resolve)=>{
        resolve(users)
    });
};

const getUSerStatus = () =>{
    return new Promise((resolve)=>{
        resolve(userStatus)
    });
};
// Solution -1
// getUsers().then(user=>{
//     getUSerStatus().then(userStatus=>{
//         const mappedUsers = user.map(user=>{
//             const isActive = userStatus.find((userStatus)=>userStatus.id===user.id).isActive
//             return {...user,isActive}
//         });
//         console.log("users",mappedUsers);
//     })
// })

// Solution-2
// Promise.all([getUsers(),getUSerStatus()]).then(([user,userStatus])=>{
//     const mappedUsers = user.map(user=>{
//         const isActive = userStatus.find(userStatus=>userStatus.id===user.id).isActive
//         return {...user,isActive};
//     });
//     console.log(mappedUsers);
// })

// Solution-3
const mapUsers = (users,userStatus) =>{
    return users.map(users=>{
        const isActive = userStatus.find(userStatus=>userStatus.id===users.id).isActive;
        return {...users,isActive};
    });
}
// Promise.all([getUsers(),getUSerStatus()]).then(([users,userStatus])=>{
//     const mappedUsers = mapUsers(users,userStatus);
//     console.log(mappedUsers);
// })

Promise.all([getUsers(),getUSerStatus()])
.then(([users,userStatus])=>mapUsers(users,userStatus))
.then((mapUsers)=>{
    console.log(mapUsers)
});