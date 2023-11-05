import { useState } from 'react';

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if(enteredTask.trim() === '') {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        className="w-2/3 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-red-500 text-sm pr-4 text-right w-1/4 sm:text-base md:text-lg"
      >
        Add task
      </button>
    </div>
  );
};

export default NewTask;
