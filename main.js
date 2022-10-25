const loginPromisses= (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;
        //const error = false;

        if (error) {
            reject(new Error("error in login!"));
        }
        console.log("User Logged!");
        resolve({email});
    });
};

/* loginPromisses("scheleder@yahoo.com", 1234).then((user)=>{
    console.log({user});
}).catch((error) => {
    console.log({error});
}); */

const displayUser = async()=>{
    const user = await loginPromisses('scheleder@yahoo.com', 1234)
    console.log({user})
}
displayUser();