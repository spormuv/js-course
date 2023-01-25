const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise((_, reject) => {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
