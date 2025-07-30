export const getPlaces = async () => {
  const response = await fetch("http://localhost:3000/places");
  const res = await response.json();
  return res;
};
export const getPlaceDetail = async (placeId) => {
  const response = await fetch(
    `http://localhost:3000/places/detail/${placeId}`
  );
  const res = await response.json();
  return res.place;
};

export const createPlace = async (newPlace) => {
  const token = localStorage.getItem("token");
  const response = await fetch("http://localhost:3000/places/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
    body: JSON.stringify(newPlace),
  });
  const res = await response.json();
  return res.createdPlace;
};

export const deletePlace = async (placeId) => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `http://localhost:3000/places/delete/${placeId}`,
    {
      method: "DELETE",
      headers: {
        "auth-token": token,
      },
    }
  );
  const res = await response.json();
  return res.message;
};
