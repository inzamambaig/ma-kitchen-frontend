import SERVER_URL from "./config";

// Services
const HOMECHEF = `${SERVER_URL}api/v1/chefs/`;
const MENU = `${SERVER_URL}api/v1/menu`;

// Slugs
// HOMECHEFS
// AUTH

export const auth = {
  LOGIN: `${HOMECHEF}login`,
  SIGNUP: `${HOMECHEF}`,
};

// MENUS
const CREATE = `${MENU}`;
const GET = `${MENU}`;
const UPDATE = `${MENU}`;
const DELETE = `${MENU}`;
