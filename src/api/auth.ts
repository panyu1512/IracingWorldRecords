import { API_URL } from "../utils/consts.ts";
import { encryptPassword } from "../utils/helpers.js";
import {fetch, CookieJar} from "node-fetch-cookies";

export const login = async (
  email: string,
  password: string,
) => {
  try{
    const cookieJar = new CookieJar();
    const hashPassword = encryptPassword(email, password);
  
    console.log(hashPassword)
  
    const response = await fetch(cookieJar, `${API_URL}auth`, {
      body: JSON.stringify({ email, password: hashPassword }),
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  }
  catch(e){
    console.log(e)
    throw new Error(e)
  }
};