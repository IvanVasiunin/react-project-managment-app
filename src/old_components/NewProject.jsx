import ProjectsList from './ProjectsList';
import EditProject from './EditProject';
import Form from './Form';

const NewProject = ({
  onCreate,
  addingProces,
  addProject,
  editingProcess,
  projectToEdit,
  removeProject,
  onRemove,
  editTask,
}) => {
  return (
    <>
      {!addingProces && !editingProcess && <ProjectsList onCreate={onCreate} />}
      {addingProces && <Form onCreate={onCreate} addProject={addProject} onRemove={onRemove}/>}
      {editingProcess && (
        <EditProject
          onCreate={onCreate}
          projectToEdit={projectToEdit}
          removeProject={removeProject}
          onRemove={onRemove}
          editTask={editTask}
        />
      )}
    </>
  );
};

export default NewProject;
