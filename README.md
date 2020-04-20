# FetchRewards Exercise

---

## Pyramid Word:

Please write a web service that takes in a string and returns a boolean to indicate whether a word is a pyramid word. A word is a ‘pyramid’ word if you can arrange the letters in increasing frequency, starting with 1 and continuing without gaps and without duplicates.

### Examples:

banana is a pyramid word because you have 1 'b', 2 'n's, and 3 'a's.
bandana is not a pyramid word because you have 1 'b' and 1 'd'.
You can use any language.

## Technologies used:

-   JavaScript
-   Express
-   Body Parser
-   CORS

## Building and Running the Application

For the below commands, please make sure you're in the root directory of the application.

Use the below command on your terminal to build the application.

`npm install`

Use the below command on your terminal to run the application.

`node server.js`

### Note:

If some other service is running on port 8080, please edit application properties file under `isPyramidWord/server.js` folder to some other port number that's free.

## Verifying Pyramid word

Once the application is running, enter the URL below with the word you want to test.

`http://localhost:8080/<word_here>`

### Example:

`true #=> http://localhost:8080/banana`
`false #=> ttp://localhost:8080/bandana`
`undefined #=> ttp://localhost:8080/1#&*+=3`

### Note:

Please make sure you change the port number in the URL as well if you change the port number in the application's file.
