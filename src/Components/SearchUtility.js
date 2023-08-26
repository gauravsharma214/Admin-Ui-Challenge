


export function searchInUsers(search,users) {
  let tempSearchHere1 = search.toLowerCase();
  return users.map((userHere2) => {
    if (
      userHere2.name.toLowerCase().includes(tempSearchHere1) ||
      userHere2.email.toLowerCase().includes(tempSearchHere1) ||
      userHere2.role.toLowerCase().includes(tempSearchHere1)
    ) {
      userHere2.show = true;
       return userHere2;
    }
    userHere2.show = false;
    return userHere2;
  });
};

