//import { HTTPError } from "ky";
import { api } from "../api";

export const loginUser = async (loginData) => {
  //console.log(loginData);
  const response = await fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    body: JSON.stringify({
      email: loginData?.email,
      password: loginData?.password,
    }),
  });

  console.log("LOGIN ACTION", response.json());
};

export const getMovies = async () => {
  try {
    const response = await api.get("movies", {
      cache: "no-store",
    });

    if (response.ok) {
      return response.json();
    } else {
      return { error: true, message: "something went wrong!" };
    }
  } catch (error) {
    if (error) {
      //Handle HTTP errors specifically
      const status = error?.response?.status;
      const responseBody = await error?.response?.json();

      console.log("HTTP Error:", status, responseBody);
    } else {
      //handle non-HTTP errors (e.g.,network issues)
      console.log("Unknown error:", error);
    }
    return undefined;
  }
};
