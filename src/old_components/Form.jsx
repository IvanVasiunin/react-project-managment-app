import { useState } from 'react';
import Input from './Input';

const Form = ({onCreate, addProject, onRemove}) => {
  onRemove(false)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleCancelClick = () => {
    onCreate(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      id: Math.random().toString(),
      name: title,
      description: description,
      dateEnd: date,
      tasks: []
    }
    addProject(obj);
    onCreate(false);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 text-right">
      <div className="w-[35rem] mt-16">
        <button onClick={handleCancelClick} className="text-stone-800 hover:text-stone-950">Cancel</button>
        <button type='submit' className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          Save
        </button>
      </div>
      <div className="w-[35rem] mt-16">
        <Input onChange={handleTitleChange} label="Title" type="text" />
        <Input onChange={handleDescription} label="Description" type="text" />
        <Input onChange={handleDateChange} label="Due date" type="date" />
      </div>
    </form>
  );
};

export default Form;