import ProjectSidebar from './ProjectsSidebar';
import NewProject from './NewProject';
import NoProjectSelected from './NoProjectSelected';
import { useState } from 'react';
import SelectedProject from './SelectedProject';

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(task) {
    setProjectState(prev => {
      const tasktId = Math.random().toString();
      const newTask = {
        text: task,
        projectId: prev.selectedProjectId,
        id: tasktId,
      };

      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState(prev => {
      return {
        ...prev,
        tasks: prev.tasks.filter(item => item.id !== id),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState(prev => {
      const projectId = Math.random().toString();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(
          item => item.id !== prev.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    item => item.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex sm:gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
