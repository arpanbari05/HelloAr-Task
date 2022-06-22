import React from "react";
import { useUsers } from "../../customHooks";
import ListItem from "./UserListItem";
import { FaSort } from "react-icons/fa";
import "./UserList.css";

function UserList({ offset, curPage }) {
  const { users } = useUsers(offset, curPage);

  return (
    <div className="text-[13px] lg:text-base w-[100%] border border-solid border-[#999]">
      <ListHeader />
      {users?.length > 0 ? (
        users.map((user) => (
          <ListItem
            name={user.name}
            idx={user.idx}
            role={user.role}
            createdAt={user.createdAt}
          />
        ))
      ) : (
        <p className="font-medium font-base text-center py-4">
          No Users found! Please add some to get started.
        </p>
      )}
    </div>
  );
}

export default UserList;

function ListHeader() {
  return (
    <div className="bg-gray-200 grid list-header">
      <div className="px-2 lg:px-5 py-3 list-header--item">#</div>
      <div className="px-2 lg:px-5 py-3 list-header--item">
        <span>User</span>
        <FaSort color={"#aaa"} />
      </div>
      <div className="px-2 lg:px-5 py-3 list-header--item">
        <span>Last Signed in</span>
        <FaSort color={"#aaa"} />
      </div>
      <div className="px-2 lg:px-5 py-3 list-header--item">
        <span>Role</span>
        <FaSort color={"#aaa"} />
      </div>
      <div className="px-2 lg:px-5 py-3 list-header--item">Delete</div>
    </div>
  );
}
