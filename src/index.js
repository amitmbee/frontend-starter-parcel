(() => {
  //arrow functions
  //print out env vars
  console.log(process.env.APP_KEY);
  console.log(process.env.APP_ENV);

  //template string
  console.log(`ENV VARS: ${process.env.APP_KEY} , ${process.env.APP_ENV}`);
})();
