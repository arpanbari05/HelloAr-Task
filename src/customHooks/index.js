import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addUser as addUserRedux,
  deleteUser as deleteUserRedux,
} from "../redux/slices/users.slice";

export function useUsers(offset = 5, page = 1) {
  const dispatch = useDispatch();

  let { users } = useSelector(({ users }) => users);

  users = users.map((user, idx) => ({ ...user, idx }));

  const start = offset * (page - 1);
  const end = start + offset;
  const paginatedUsers = users.slice(start, end);

  useEffect(() => {
    const jsonUsers = users && JSON.stringify(users);
    localStorage.setItem("users", jsonUsers);
  }, [users]);

  function addUser(user) {
    dispatch(addUserRedux(user));
  }

  function deleteUser(idx) {
    dispatch(deleteUserRedux(idx));
  }

  return {
    addUser,
    deleteUser,
    allUsers: users.sort((a, b) => b.createdAt - a.createdAt),
    users: paginatedUsers,
  };
}

export function useToggle(initialState = false) {
  const [show, setShow] = useState(initialState);

  function handleOpen() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  function handleToggle() {
    setShow((prev) => !prev);
  }

  return {
    handleClose,
    handleOpen,
    handleToggle,
    show,
  };
}

export function usePagination() {
  const offset = 5;

  const { users } = useSelector(({ users }) => users);

  const pages = users.length / offset;

  const remainingItems = users.length % (offset * pages) > 0 ? 1 : 0;

  const countOfPages = pages + remainingItems;

  let totalPages = [];

  for (let i = 0; i < countOfPages; i++) {
    totalPages.push(i + 1);
  }

  const [curPage, setCurPage] = useState(1);

  const isNextEnable = curPage < countOfPages;

  const isPrevEnable = curPage > 1;

  function handleNext() {
    if (isNextEnable) {
      console.log({ isNextEnable });
      setCurPage((prev) => prev + 1);
    }
  }

  function handlePrev() {
    if (isPrevEnable) {
      setCurPage((prev) => prev - 1);
    }
  }

  function handlePageChange(page) {
    console.log({ page });
    setCurPage(page);
  }

  return {
    pages: totalPages,
    countOfPages,
    offset,
    curPage,
    nextDisabled: !isNextEnable,
    prevDisabled: !isPrevEnable,
    handleNext,
    handlePrev,
    handlePageChange,
  };
}
