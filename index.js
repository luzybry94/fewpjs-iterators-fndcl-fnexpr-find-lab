function superbowlWin(arr) {
    let result = arr.find( record => record.result === "W" )
    return !!result ? result.year : undefined
}
