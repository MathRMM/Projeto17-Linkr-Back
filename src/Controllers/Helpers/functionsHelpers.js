function defineLimitsLikes(likesArray, userId){
    const newArray = []
    if(likesArray.length >= 2){
        for(let i = 0; i < 2; i++){
            newArray.push({
                userId: likesArray[i].userId,
                username: likesArray[i].username
            })
        }
        return newArray
    }else if (likesArray.length === 1){
        newArray.push({
            userId: likesArray[0].userId,
            username: likesArray[0].username
        })
        return newArray
    } else return []
}

async function getMetadata(postsArray) {
    const metaPost = []
    
    for (const post of postsArray) {
      const meta = await urlMetadata(post.postLink)
      if (meta.title && meta.image && meta.description) {
        metaPost.push({
          ...post,
          metaTitle: meta.title,
          metaImage: meta.image,
          metaDescription: meta.description
        })
      } else metaPost.push({
        ...post
      })
    }
  
    return metaPost
  }

export {
    defineLimitsLikes,
    getMetadata
}