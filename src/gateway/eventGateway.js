 const baseUrl='https://5f30561c6b05e900163bd5d4.mockapi.io/api/v1/tasks';

export const createTask=taskData=>{
   return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData),
    }).then(response => {
        if (!response.ok) {
            throw new Error("Internal Server Error. Can't display events");
        } 
    })
}

export const fetchTasksList=()=>{
   return  fetch(baseUrl)
    .then(res => {
        if (res.ok) {
            return res.json();
        } 
    }).then(tasksList => {
        return tasksList.map(({ _id, ...task }) => ({
             id: _id,
             ...task }));
    })
}

export const deleteTask=id=>{
  return  fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    }).then(response => {
        if (!response.ok) {
            throw new Error("Internal Server Error. Can't display events");
        }
    })
}