const items = [{id: 1,name: "USA",
    values: [{id: 2,name: "Chevy",
    values: [{id: 3,name: "Suburban"},
             {id: 4,name: "Camaro",
    values: []}
            ]
        },
        {id: 5,name: "Ford",
        values: []
        }

    ]

}];

const PrintNames = (obj) =>{
 let res = obj.filter((el)=>{
    console.log(el.name);
    if(typeof el.values==='object'){
        PrintNames(el.values);
    }
 })   
   
}
PrintNames(items);