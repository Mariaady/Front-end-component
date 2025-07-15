export const getPlaces = async () => {
    const response = await fetch('http://localhost:3000/places')
    const res = await response.json()
    return res
}