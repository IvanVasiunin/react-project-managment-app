import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="mt-14 px-4 sm:pl-0 sm:pr-8 sm:mt-24 w-2/3 lg:w-3/4 xl:w-4/5 2xl:w-5/6">
        <menu className="flex items-center justify-end gap-4 my-3 md:w-[30rem] lg:w-[40rem] 2xl:w-[50rem] mx-auto">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="sm:px-6 px-5 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div className='md:w-[30rem] lg:w-[40rem] 2xl:w-[50rem] mx-auto'>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" isTextArea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
