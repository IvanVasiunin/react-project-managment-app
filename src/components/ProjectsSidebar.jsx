import Button from './Button';

const ProjectSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map(item => {
          let cssClasses =
            'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

          if (item.id === selectProjectId) {
            cssClasses += ' bg-stone-800 text-stone-200';
          } else {
            cssClasses += ' text-stone-400';
          }

          return (
            <li key={item.id}>
              <button
                onClick={() => onSelectProject(item.id)}
                className={cssClasses}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
