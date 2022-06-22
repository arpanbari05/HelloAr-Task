import React from "react";
import { usePagination, useToggle } from "../customHooks";
import AddUser from "./AddUser";
import Button from "./Common/Button";
import Pagination from "./Pagination";
import UserList from "./UserList/UserList";

function Settings() {
  const addUserModal = useToggle(false);

  const {
    pages,
    curPage,
    offset,
    handleNext,
    handlePrev,
    handlePageChange,
    nextDisabled,
    prevDisabled,
  } = usePagination();

  return (
    <div className="w-full xl:w-[800px] flex flex-col gap-6 items-start">
      {addUserModal.show && <AddUser handleClose={addUserModal.handleClose} />}
      <Button onClick={addUserModal.handleOpen}>ADD USER</Button>
      <UserList curPage={curPage} offset={offset} />
      <Pagination
        pages={pages}
        curPage={curPage}
        handleNext={handleNext}
        handlePrev={handlePrev}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Settings;
