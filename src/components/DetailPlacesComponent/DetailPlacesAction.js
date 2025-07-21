export const LOAD_PLACE = 'LOAD_PLACE'
export const SAVE_PLACE_DETAIL = 'SAVE_PLACE_DETAIL'

export const detailPlacesAction = (placeId) => {
    return {
        type: LOAD_PLACE,
        payload: {placeId}
    }
}

export const saveDetailPlaces = (placeDetail) => {
    return {
        type: SAVE_PLACE_DETAIL,
        payload: {placeDetail}
    }
}