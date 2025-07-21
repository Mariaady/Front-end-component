export const getPlaces = async () => {
    const response = await fetch('http://localhost:3000/places')
    const res = await response.json()
    return res
}
export const getPlaceDetail = async (placeId) => {
    const response = await fetch(`http://localhost:3000/places/detail/${placeId}`)
    const res = await response.json()
    console.log('getPlaceDetail response:', res);  // <--- Aquí
    return res
}
 