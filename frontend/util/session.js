export const createSession = user => {
    return $.ajax({
        method: `POST`,
        url: `api/session`
    });
};

export const deleteSession = () => {
    return $.ajax({
        method: `DELETE`,
        url: `api/session`
    })
}

//User Creation

export const createUser = (user) => {
    return $.ajax({
        method: `POST`,
        url: `/api/users`,
        data: {user}
    })
}