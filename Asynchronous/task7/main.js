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

const getMappedUsers = async () =>{
    const user = await getUsers();
    const userStatuses = await getUSerStatus();
    const
}