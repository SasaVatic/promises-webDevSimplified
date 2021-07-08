let p = new Promise((resolve, reject) => {
    let a = 1 + 3;
    if(a === 2) {
        resolve('Success');
    }
    else {
        reject('Failed');
    }
})

p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
});

//---------------------------------------

const userLeft = false;
const userWatchingCatMame = false;
/*
function watchTutorialCallback(callback, errorCallback) {
    if(userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        });
    }
    else if(userWatchingCatMame) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        });
    }
    else {
        callback('Thumbs up and subscribe');
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message);
}, (error) => {
    console.log(error.name + ' ' + error.message);
});
*/

function watchTutorialPromise() {
    let p = new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            });
        }
        else if(userWatchingCatMame) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            });
        }
        else {
            resolve('Thumbs up and subscribe');
        }
    });
    p.then((message) => {
        console.log(message);
    }).catch((message) => {
        console.log(message.name + ' ' + message.message);
    });
}

watchTutorialPromise();