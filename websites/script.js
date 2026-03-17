// let userName;

// userName = window.prompt(`What is your name genius!`);

// document.getElementById('myId').textContent= userName;

const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countable1 = document.getElementById('countable1');

let count = 0;

increaseBtn.onclick = function () {
    count ++;
    countable1.textContent = count; 

}

decreaseBtn.onclick = function () {
    count --;
    countable1.textContent = count;
}

resetBtn.onclick = function () {
    count =0;
    countable1.textContent = count;   
}
function loginUser(email, password) {
  //return a new promise instead of a callback function 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`We are logging into Netflix`)
      // replace callbackfn with reslove
      resolve({ userEmail: email, userPassword: password })
      console.log(email)
    }, 3000)
  })
}


//get All Vidoes
function getAllVideos({userEmail}) {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            console.log(`We have all recently watched videos`)
            const videoInfo = ['Star Wars', "The Ant Man", "The Lord of the rings"]
            resolve( {userEmail,videoInfo} )
            console.log(videoInfo)
        });


    });
}

function getVideoInfo (videoInfoObj) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log(`We have the details of one movie`)
            resolve({ video: videoInfoObj.videoInfo[1]})
            console.log(visualViewport.videoInfo[1])
        }, 3000)
    })
}


loginUser("jay@duff.com", "1234rhgivshcbjk").then((userObj) => getAllVideos(userObj) ).then((videosObj) => getVideoInfo(videosObj) )


//displaying

