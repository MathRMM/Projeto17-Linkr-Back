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

export {defineLimitsLikes}