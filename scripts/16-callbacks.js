const login= (email, password, callback)=>{
    setTimeout(()=>{
        
        console.log("User Logged!");
        callback({email});
    },1500);
    console.log("depois de setar timeout!")
};

const user1 = login("scheleder@yahoo.com", 1234, (user1)=>{
    console.log({user1});
});

//////////////////////////////////////////////////////////////////////


const loginTest= (email, password, onSucess, onError)=>{
    setTimeout(()=>{
        const error = true;
        //const error = false;
      if (error) {
        return onError(new Error("error in login!"));
      }
        console.log("User Logged!");
        onSucess({email});
    },1500);
    console.log("depois de setar timeout!")
};

const user2 = loginTest(
    "scheleder@yahoo.com",
    1234,
    (user2)=>{console.log({user2})},
    (error)=>{console.log({error})}
    );

/////////////////////////////////////////////////////////////////////
    
const loginUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
      const error = false;
  
      if (error) {
        return onError(new Error("error in login!"));
      }
  
      console.log("user logged!");
      onSuccess({ email });
    }, 1500);
  };
  
  const getUserVideos = (email, callback) => {
    setTimeout(() => {
      callback(["video1", "video2", "video3"]);
    }, 2000);
  };
  
  const getVideoDetails = (video, callback) => {
    setTimeout(() => {
      callback({ title: "video title" });
    }, 2500);
  };
  
  const user = loginUser(
    "felipe@gmail.com",
    "123456",
    (user) => {
      getUserVideos(user.email, (videos) => {
        console.log({ videos });
        getVideoDetails(videos[0], (videoDetails) => {
          console.log({ videoDetails });
        });
      });
    },
    (error) => {
      console.log({ error });
    }
  );
  
  // console.log({ user });