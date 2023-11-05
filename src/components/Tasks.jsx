import NewTask from './NewTask';

const Tasks = ({ tasks, onAdd, onDelete, projectId }) => {
  const chosenTasks = tasks.filter(task => task.projectId === projectId)
  return (
    <section className='md:w-[30rem] lg:w-[40rem] 2xl:w-[50rem] mx-auto'>
      <h2 className="text-lg font-bold text-stone-700 mb-3 sm:text-xl md:text-2xl">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {chosenTasks.length === 0 && (
        <p className="text-stone-800 my-3 text-sm md:text-lg">
          This project does not have any tasks yet.
        </p>
      )}
      {chosenTasks.length > 0 && (
        <ul className="px-4 py-2 mt-4 rounded-md bg-stone-100">
          {chosenTasks.map(task => (
            <li className="flex justify-between my-4" key={task.id}>
              <span className='break-words w-2/3 md:text-lg'>{task.text}</span>
              <button onClick={() => onDelete(task.id)} className="text-stone-700 hover:text-red-500 md:text-lg">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
