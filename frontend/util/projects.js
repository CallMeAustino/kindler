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
        method: `DELETE`,
        url: `api/projects/${projectId}`,
        data: project
    })
}

