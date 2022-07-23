// Production
const PROD = "https://ma-kitchen.herokuapp.com/";

// Development

const DEV = "http://localhost:3000/";

// Check to see if prod or dev is in use
const isProduction = false;

const SERVER_URL = isProduction ? PROD : DEV;

export default SERVER_URL;
