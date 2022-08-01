// import SERVER_URL from "./config";
import SERVER_URL from "./Config";

// Services
const HOMECHEF = `${SERVER_URL}api/v1/chefs/`;
const MENU = `${SERVER_URL}api/v1/menu`;

// Slugs
// HOMECHEFS
// AUTH

//Users
export const auth = {
  LOGIN: `${HOMECHEF}login`,
  SIGNUP: `${HOMECHEF}signup`,
};

// MENUS
const CREATE = `${MENU}`;
const GET = `${MENU}`;
const UPDATE = `${MENU}`;
const DELETE = `${MENU}`;
