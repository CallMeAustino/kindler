export const createProject = project => {
    debugger
    return $.ajax({
        method: `POST`,
        url: `api/projects`,
        data: { project }
    });
};

export const deleteProject = (projectId) => {
    return $.ajax({
        method: `DELETE`,
        url: `api/projects/${projectId}`
    })
}

export const updateProject = (project) => {
    return $.ajax({
        method: `PATCH`,
        url: `api/projects/${projectId}`,
        data: project
    })
}

export const fetchProject = projectId => (
    $.ajax({
        method: "GET",
        url: `/api/projects/${projectId}`,
    })
);

export const fetchMyProjects = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}/projects`,
    })
);

