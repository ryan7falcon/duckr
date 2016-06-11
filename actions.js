//users
{
  type: AUTH_USER,
  uid
}

{
  type: UNAUTH_USER
}

{
  type: FETCHING_USER
}

{
  type: FETCHING_USER_FAILURE,
  error: 'Error fetching user'
}

{
  type: FETCHING_USER_SUCCESS,
  uid,
  user,
  timeStamp
}

//ducks
{
  type: FETCHING_DUCK
}

{
  type: FETCHING_DUCK_FAILURE,
   error: 'Error fetching duck'
}

{
  type: FETCHING_DUCK_SUCCESS,
  duck
}

{
  type: REMOVE_FETCHING
}

{
  type: ADD_DUCK,
  duck
}

{
  type: ADD_MULTIPLE_DUCKS,
  ducks
}

//feed
{
  type: SET_FEED_LISTENER
}

{
  type: SET_FEED_LISTENER_ERROR,
  error: 'Error setting feed listener'
}

{
  type: SET_FEED_LISTENER_SECCESS,
  ducksId
}

{
  type: ADD_NEW_DUCK_ID_TO_FEED,
  duckId
}

{
  type: RESET_NEW_DUCKS_AVAILABLE
}

//listeners
{
  type: ADD_LISTENER,
  listenerId
}

//modal
{
  type: OPEN_MODAL
}


{
  type: CLOSE_MODAL
}

{
  type: UPDATE_DUCK_TEXT,
  newDuckText
}

//replies

{
  type: FETCHING_REPLIES
}

{
  type: FETCHING_REPLIES_FAILURE,
   error: 'Error fetching replies'
}

{
  type: FETCHING_REPLIES_SUCCESS,
  replies,
  duckId,
  lastUpdated: Date.now()
}

{
  type: ADD_REPLY,
  reply,
  duckId
}

{
  type: ADD_REPLY_EROOR,
  error: 'Error adding reply'
}

{
  type: REMOVE_REPLY,
  replyId
}

//likeCount
{
  type: FETCHING_COUNT
}

{
  type: FETCHING_COUNT_FAILURE,
   error: 'Error fetching duck\'s like count'
}

{
  type: FETCHING_COUNT_SUCCESS,
  count,
  duckId
}

//usersDucks

{
  type: FETCHING_USERS_DUCKS
}

{
  type: FETCHING_USERS_DUCKS_FAILURE,
   error: 'Error fetching user\'s ducks'
}

{
  type: FETCHING_USERS_DUCKS_SUCCESS,
  uid,
  duckIds,
  lastUpdated
}

{
  type: ADD_SINGE_USERS_DUCK,
  uid,
  duckId,
  lasrUpdated
}

//usersLikes
{
  type: FETCHING_LIKES
}

{
  type: FETCHING_LIKES_FAILURE,
   error: 'Error fetching user\'s likes'
}

{
  type: FETCHING_LIKES_SUCCESS,
  likes
}

{
  type: ADD_LIKE,
  duckId
}

{
  type: REMOVE_LIKE,
  duckId
}

