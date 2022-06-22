import React from "react";
import { useUsers } from "../../customHooks";
import ListItem from "./UserListItem";
import "./UserList.css";

function UserList({ offset, curPage }) {
  const { users } = useUsers(offset, curPage);

  return (
    <div className="text-[13px] lg:text-base w-[100%] border border-solid border-[#999]">
      <ListHeader />
      {users.map((user) => (
        <ListItem
          name={user.name}
          idx={user.idx}
          role={user.role}
          createdAt={user.createdAt}
        />
      ))}
    </div>
  );
}

export default UserList;

function ListHeader() {
  return (
    <div className="bg-gray-200 grid list-header">
      <div className="px-2 lg:px-5 py-3 list-header--item">#</div>
      <div className="px-2 lg:px-5 py-3 list-header--item">User</div>
      <div className="px-2 lg:px-5 py-3 list-header--item">Last Signed in</div>
      <div className="px-2 lg:px-5 py-3 list-header--item">Role</div>
      <div className="px-2 lg:px-5 py-3 list-header--item">Delete</div>
    </div>
  );
}
