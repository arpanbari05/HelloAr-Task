import React from "react";
import { useUsers } from "../customHooks";
import Button from "./Common/Button";

function DeletePopup({ user, idx, handleClose }) {
  const { deleteUser } = useUsers();

  const handleDeleteUser = () => {
    deleteUser(idx);
    handleClose();
  };

  return (
    <section className="w-full h-[100vh] bg-[rgba(0,0,0,.4)] fixed top-0 left-0 flex items-center justify-center z-10">
      <div className="w-[330px] sm:w-[400px] flex flex-col p-8 gap-10 items-center justify-center rounded bg-white">
        <p className="text-center">
          Are you sure you want to delete <b>{user.name}</b> from users list ?
        </p>
        <div className="flex gap-5">
          <Button onClick={handleClose} classes="btn-tertiary">
            Cancel
          </Button>
          <Button onClick={handleDeleteUser} classes="btn-danger">
            Delete
          </Button>
        </div>
      </div>
    </section>
  );
}

export default DeletePopup;
