{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info:{
        name,
        uid,
        avatar,
      }
    }
  },
  modal:{
    duck,
    isOpen
  },
  ducks:{
    isFetching,
    error,
    [duckid]:
      lastUpdated,
      info:{
        avatar
        duckId
        name
        text
        timeStamp
        uId
      }
  },
  usersducks:{
    isFetching,
    error,
    [uid]:{
      lastUpdated,
      duckIds: [duckId, duckId, duckId]
    }
  },
  likeCount:{
    [duckId]: 0
  },
  usersLikes:{
    [duckId]: true
  },
  replies:{
    isFetching,
    error,
    [duckId]: {
      replies:{
        lastUpdated,
        [replyId]: {
          name
          comment
          timeStamp
          avatar
        }
      }
    }
  },
  listeners:{
    [listenersId]: true
  },
  feed:{
    isFetching,
    error,
    newDucksAvailable,
    duckIdsToAdd: [duckId, duckId],
    duckIds: [duckId, duckId]
  } 

}