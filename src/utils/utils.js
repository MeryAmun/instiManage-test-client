

export const getCurrentLocation = (location) => {
if(location === "/"){
    return "Exchanges"
}else if(location === "/transfers"){
    return "Transfers"
}
else if(location === "/home"){
    return "Home"
    
}else if(location === "/currencies"){
    return "Currencies"
}else if(location === "/notes"){
    return "Notes"
}else if(location === "/charts"){
    return "Charts"
}else if(location === "/users"){
    return "Users"
}else if(location === "/clients"){
    return "Clients"
}
}