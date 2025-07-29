export const doLoginBack = async (loginInfo) => {
  const response = await fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: loginInfo.username,
      password: loginInfo.password,
    }),
  });

  const res = await response.json();
  return res;
};

export const createUser = async (newUser) => {
  const res = await fetch("http://localhost:3000/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      newUser,
    }),
  });
  const result = await res.json();
  return result.user;
};

export const modifyUser = async (user) => {
  const res = await fetch(`http://localhost:3000/user/modify/${user.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
    }),
  });
  const result = await res.json();
  const modifiedUser = result.user;
  return modifiedUser;
};

export const addBooking = async (userId, placeId) => {
  const res = await fetch("http://localhost:3000/user/addBooking", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      placeId,
    }),
  });
  const result = await res.json();
  return result;
};

export const removeBooking = async (userId, placeId) => {
  const res = await fetch("http://localhost:3000/user/removeBooking", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      placeId,
    }),
  });
  const result = await res.json();
  return result;
};
