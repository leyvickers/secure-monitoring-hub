// run device script to run continuously without stopping performing action every 5 seconds
// console.log(typeof functionCallRocky());

setInterval(functionCallRocky, 5000);

//define callback argument of type function to avoid undefined return type
function functionCallRocky() {
  console.log("Amaze Amaze Amaze");
  //Improvement: on mockData simulate loop to generate different payload
  const generateObject = {
    device_id: "Substation_Alpha",
    status: "Normal",
    cpu_usage: 45,
  };
  sendPostRequest(generateObject);
}

//send POST requests to backend server
//async = asyncronous function that returns a promise
//PROMISE == always returns a state to represent the evenutla completition or failore or pending
//Passed generateObject as parameter = passing object as paremter means the function changes the object's properties
//... is visible outside the function
//Meaning non primitate data types like objects are passed by reference so no copy is directed to function.
//So non primitivate data types are passed by reference
const sendPostRequest = async (generateObject) => {
  const url = "";
  const data = { generateObject };

  try {
    //FETCH api for javascript interface built into browser for HTTP requests..
    //..no need for external libraries

    //response recieved after sending http request to web server
    //fetch() intiates request to url
    const response = await fetch(url, {
      //Send device payload to server using POST
      //The request body includes the request header to give the server some information about the request
      method: "POST",
      headers: {
        //content-type = tells server the format of request body
        "Content-Type": "application/json",
      },
      // convert javascript object to send into JSON string format
      //Meaning browser does not convert javascript object into JSON string.
      body: JSON.stringify(data),
    });

    // Parse JSON response
    //await = pause execution of async function only until a promise is resolved.
    //Wait for response of server to return RESPONSE object after sending request to server via url
    //This is the promise returned succesfully because the transaction regardless of the reponse request status..
    // is completed succesfully by the server.
    //E.g even if the server returns error status such as 404 Not found=server cannot locate requested resource.
    //Meaning the promise is fulfilled and server returns error status meaning the server is working to process
    const result = await response.json();
    console.log("Server response: ", result);

    //This is the promise returned sucessfully but the transaction failed because it
    //failed to send data to server and the server fails to process request.
    //E.g server is offline or url doesnt exist
  } catch (error) {
    console.error("Error:", error);
  }
};
