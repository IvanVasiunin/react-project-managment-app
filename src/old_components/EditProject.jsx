import { useRef, useState } from 'react';

const EditProject = ({
  projectToEdit,
  removeProject,
  onRemove,
  editTask,
  onCreate,
}) => {
  onCreate(false);
  const handleRemove = () => {
    onRemove(false);
    removeProject(projectToEdit.id);
  };

  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    editTask(prev => {
      let arr = [...prev];
      let obj = arr.find(n => n.id === projectToEdit.id);
      let index = arr.findIndex(n => n.id === projectToEdit.id);
      let id = Math.random().toString();
      obj.tasks.push({ task: newTask, id: id });
      arr.splice(index, 1, obj);
      return arr;
    });
    setNewTask('');
  };

  const handleInputChange = e => {
    setNewTask(e.target.value);
  };

  const handleClearTask = e => {
    editTask(prev => {
      let arr = [...prev];
      let obj = arr.find(n => n.id === projectToEdit.id);
      let index = arr.findIndex(n => n.id === projectToEdit.id);
      let removeTaskId = obj.tasks.findIndex(item => item.id === e.target.id);
      console.log(removeTaskId)
      obj.tasks.splice(removeTaskId, 1);
      console.log(obj.tasks)
      arr.splice(index, 1, obj);
      return arr
    })
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-600 mb-2">
        {projectToEdit.name}
      </h1>
      <button onClick={handleRemove}>Delete</button>
      <p className="mb-4 text-stone-400">{projectToEdit.dateEnd}</p>
      <p className="text-stone-600 whitespace-pre-wrap">
        {projectToEdit.description}
      </p>
      <h2>Tasks</h2>
      <input
        onChange={handleInputChange}
        value={newTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button onClick={handleAddTask}>Add task</button>
      <ul>
        {projectToEdit.tasks &&
          projectToEdit.tasks.map(item => {
            return (
              <li key={item.id}>
                {item.task}
                <button
                  onClick={handleClearTask}
                  id={item.id}
                  className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                >
                  Clear
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default EditProject;
