// how to get result from promise

const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.stringify({ id: 1, name: "John", age: 18, language: "JS" }));
    }, 1000);
  });
};

// start code

// end code
