import { GetToken } from "./token";

export const getCategory = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/product/categories/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return console.error(error);
    });
};

export const getProductData = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/product/list/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
export const Register = (name, email, password) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    first_name: name,
    email_or_phone: email,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/user/register/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const LoginFunction = (email, password) => {
  console.log(email, password);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email_or_phone: email,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/user/token/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const GetUserData = () => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${GetToken()}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/user/detail/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));
};

export const UserUpdate = (firstName, lastName, email, addres) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${GetToken()}`);

  const raw = JSON.stringify({
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: "",
    address: addres,
    password: "string",
  });

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "https://ecommercev01.pythonanywhere.com/user/update-profile/",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
