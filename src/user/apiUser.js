export const read = (userId, token) =>{
    return fetch(`http://localhost:2345/api/user/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then( response =>{
        return response.json();
    })
    .catch (err => console.log(err));
};

export const list = () => {
    return fetch(`http://localhost:2345/api/users`, {
        method: "GET"
    })
    .then( response =>{
        return response.json();
    })
    .catch (err => console.log(err));
}