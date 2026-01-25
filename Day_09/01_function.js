//const add = (a)=>(b)=>a+b;


function add(a){
    return function add(b){
        return (a+b);
    }
}
console.log(add(4)(5));


