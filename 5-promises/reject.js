// how to hold promise errors

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error: User not found");
    }, 1000);
  });
};

// start code

// end code
