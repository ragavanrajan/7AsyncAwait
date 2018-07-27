// ****************
// async will return Promise. check in console
// or use th arrow keys to pass the function

// async function myFunc() {


//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const error = false;

//     if (!error) {
//         const res = await promise; // wait until promise is resolved 
//         return res;

//     } else {
//         await Promise.reject(new Error('Something went wrong'));

//     }


// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));


async function getUsers() {

    // await response of the fetch call 
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceed once it is resolved 
    const data = await response.json();
    // only proceed once second promose is resolved
    return data;

}

getUsers().then(users => console.log(users));