export let tasks =[];

export const addTask = (text) =>{
    const task = {id: Date.now(), text, completed: false};
    tasks.push(task);
    return tasks;
}

export const deleteTask = (id) =>{
    tasks = tasks.filter(t => t.id !== id);
    return tasks;
}

export const toggleTask = (id) =>{
    const task = tasks.find(t => t.id === id);
    if(task) task.completed = !task.completed;
    return tasks;
}

export const editTask = (id, newTask) =>{
    const task = tasks.find(t => t.id === id);
    if(task) task.text = newTask;
}

