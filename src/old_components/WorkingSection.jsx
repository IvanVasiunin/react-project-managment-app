import SideBar from './SideBar';
import NewProject from './NewProject';
import { useState } from 'react';

const WorkingSection = ({ addProject, projects, removeProject, editTask }) => {
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [projectEditId, setProjectEditId] = useState('');

  const editProject = e => {
    setEditing(true);
    setProjectEditId(e.target.id);
  };
  console.log('projects - ', projects)
  const projectToEdit = projects.find(item => item.id === projectEditId);

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          onCreate={setAdding}
          projects={projects}
          onEdit={editProject}
        />
        <NewProject
          onCreate={setAdding}
          addingProces={adding}
          addProject={addProject}
          editingProcess={editing}
          projectToEdit={projectToEdit}
          removeProject={removeProject}
          onRemove={setEditing}
          editTask={editTask}
        />
      </main>
    </>
  );
};

export default WorkingSection;
