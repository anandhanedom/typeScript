const names: Array<string> = []; //same as string[]
// names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 3000);
});

promise.then((data) => data.split(' '));
