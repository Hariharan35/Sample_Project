//Map
// let values=[12,22,22,12]
// const newValue=values.map((values,index)=>{
//     return `New Array values : ${values*2}`
// })
// console.log(newValue)
// console.log(values)



//Filter

// let n=[1,2,3,4,5]
// const num=n.filter((n,index)=>n%2===0)
// console.log(num)
// console.log(n)

//Find

const users=[
    {id:1,name:'Hariharan',email:'hariharan32@gmail.com'},
    {id:2,name:'Nivi',email:'nivi32@gmail.com'},
    {id:3,name:'Kumar',email:'kumar32@gmail.com'},
    {id:4,name:'Balaji',email:'balaji32@gmail.com'},
    {id:5,name:'Asha',email:'asha32@gmail.com'},
    {id:6,name:'Kavi',email:'kavu32@gmail.com'},
    {id:7,name:'Kani',email:'kani32@gmail.com'},
    {id:8,name:'Priya',email:'priya32@gmail.com'},
    {id:9,name:'Lokesh',email:'lokesh32@gmail.com'},
    {id:10,name:'Anna',email:'annai32@gmail.com'},
    {id:11,name:'Kumaran',email:'kumaran3222@gmail.com'},
    
]

// let a=users.find(u=>u.id===4);
// console.log(a)

// const b=a.find(u=>u.name==='Nivi');
// console.log(b.email)

// const c=users.find(u=>u.id===1);
// console.log(c.name)

// const object=users.find(u=>u.id===7);
// console.log(object)

// const object1=users.find(u=>u.id===12);
// console.log(object1)

// const user_1=users.findIndex(f=>f.id===7);
// console.log(user_1)

// const user_2=users.findIndex((f,index)=>f.id===12);
// console.log(user_2)

// const n=[1,2,3,4]
// const even=n.find(n=>n%2===0)
// console.log(even)

let userName=[]
const total=userName.reduce((acc,n)=>acc+n,0);
console.log(total)