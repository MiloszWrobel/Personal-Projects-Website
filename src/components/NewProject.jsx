import { useRef } from "react";
import Modal from "./Modal";

import Input from "./Input";

export default function NewProject({ onAdd }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enternedTitle = title.current.value;
    const enternedDescription = description.current.value;
    const enternedDueDate = dueDate.current.value;

    if (
      enternedTitle.trim() === "" ||
      enternedDescription.trim() === "" ||
      enternedDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enternedTitle,
      description: enternedDescription,
      dueDate: enternedDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>Please make sure you provide a valid value for every input</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
