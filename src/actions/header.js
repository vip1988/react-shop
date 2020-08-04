import { createAction } from 'redux-actions'


// ------------------------------------
// Constants
// ------------------------------------
export const AVATAR_INDEX_DATA = 'AVATAR_INDEX_DATA'

export const avatarIndexData = createAction(AVATAR_INDEX_DATA)

const getAvatarIndexData = () => (dispatch, getState) => {
  const { clutch: { serverInfo: { cdnDomain } } } = getState()
  fetch(`${cdnDomain}/avatars/meta.json`)
    .then(response => response.json())
    .then(data => {
      dispatch(avatarIndexData({ indexData: data }))
    })
    .catch(error => {
      console.warn(error)
    })
}

export default getAvatarIndexData
