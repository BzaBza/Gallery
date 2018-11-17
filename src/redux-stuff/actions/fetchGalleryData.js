export const fetchGalleryData = () => dispatch => {
  fetch('https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043', {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
  })
   .then(response =>  dispatch(
    {type: 'FETCH_GALLERY_DATA_SUCCESS', payload: JSON.parse(response._bodyInit)},
   ));
};