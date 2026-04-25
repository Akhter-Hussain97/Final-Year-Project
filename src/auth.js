export const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

export const loginUser = (token) => {
  localStorage.setItem("token", token);
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
