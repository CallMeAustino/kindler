export const createProject = project => {
    // debugger
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
        url: `api/projects/${project.id}`,
        data: { project }
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

export const addBacking = (backing) => {
    // debugger
    return $.ajax({
        method: "POST",
        url: `/api/project_backers`,
        data: { backing } 
    })
}