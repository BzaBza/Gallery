const initialState = [];

export default function galleryData(state = initialState, action) {
  if (action.type === 'FETCH_GALLERY_DATA_SUCCESS') {
    return action.payload;
  }
  return state;
};