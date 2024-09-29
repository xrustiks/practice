function downloadTexture(delay) {
  return new Promise((resolve, reject) => {
    if (delay === 2000) {
      reject("Not good number");
    } else {
      setTimeout(() => {
        console.log(`Downloaded with delay ${delay}`);
        resolve(`Done: ${delay}`);
      }, delay)
    }
  });
}

const promise = Promise.all([downloadTexture(1000), downloadTexture(2000), downloadTexture(3000)]);

promise.then((data) => {
  data.forEach((text) => {
    console.log(text);
  })
}).catch((error) => {
  console.log(error)
})