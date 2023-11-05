import Tasks from './Tasks';

const SelectedProject = ({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="mt-16 px-4 sm:pl-0 sm:pr-8 sm:mt-24 w-2/3 lg:w-3/4 xl:w-4/5 2xl:w-5/6">
      <header className="pb-3 mb-3 border-b-2 border-stone-300 md:w-[30rem] lg:w-[40rem] 2xl:w-[50rem] mx-auto">
        <div className="flex items-center justify-between gap-3">
          <h1 className="break-words w-2/3 text-lg leading-4 sm:text-xl font-bold text-stone-600 md:text-2xl">
            {project.title}
          </h1>
          <button
            onClick={onDeleteProject}
            className="text-stone-600 hover:text-stone-950 md:text-lg"
          >
            Delete
          </button>
        </div>
        <p className="my-2 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap text-sm sm:text-base md:text-lg">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} projectId={project.id}/>
    </div>
  );
};

export default SelectedProject;
