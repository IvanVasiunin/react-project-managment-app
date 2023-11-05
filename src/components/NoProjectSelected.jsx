import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="mt-14 px-4 sm:mt-24 text-center w-2/3 lg:w-3/4 xl:w-4/5 2xl:w-5/6">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectImage}
        alt="No project selected"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4 2xl:text-lg">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
