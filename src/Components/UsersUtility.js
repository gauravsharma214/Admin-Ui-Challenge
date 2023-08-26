


export function ProcessUsersHere (usersHere){
    return usersHere.map(userH => {
        userH.selected = false;
        userH.edit = false;
        userH.show = true;
        return userH;
    })
} 