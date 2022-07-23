import SERVER_URL from "./config";

/* 
    Services
*/

// Auth Service
const authService = `${SERVER_URL}/v1`;

/* 
    Slug
*/

// Auth Slug
const auth = `${authService}/auth`;

// User
export const HOMECHEF = {
  LOGIN: `${auth}/login`,
  SIGNUP: `${auth}/signup`,
};
