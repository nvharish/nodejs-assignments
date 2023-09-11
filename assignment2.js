function fakePromise(duration, data) {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, duration);
    });
    return promise;
}

fakePromise(3000, {
    name: 'harish',
    age: 32
}).then((res) => {
    console.log(res);
})