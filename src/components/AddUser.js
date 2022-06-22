import React from "react";
import { useForm } from "react-hook-form";
import addUserIcon from "../assets/add-user.png";
import Button from "./Common/Button";
import TextInput from "./Common/TextInput";
import SelectInput from "./Common/SelectInput";
import { useUsers } from "../customHooks";

const emailValidations = {
  required: {
    value: true,
    message: "This field is required",
  },
  pattern: {
    value:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: "Invalid email address",
  },
};

function AddUser({ handleClose }) {
  return (
    <div className="w-full h-[100vh] bg-[rgba(0,0,0,.4)] fixed top-0 left-0 flex items-center justify-center z-10">
      <div className="flex flex-col lg:flex-row w-max h-[100vh] lg:w-[800px] lg:h-[500px] bg-white shadow-xl rounded overflow-hidden">
        <div className="flex flex-row lg:flex-col gap-3 lg:gap-8 bg-secondary text-white p-3 lg:p-6 w-full lg:w-[300px] items-center lg:items-stretch">
          <div className="flex justify-center">
            <img
              src={addUserIcon}
              className="w-24 h-24 lg:w-32 object-contain"
              alt="logo"
            />
          </div>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </p>
        </div>
        <AddUserForm onClose={handleClose} />
      </div>
    </div>
  );
}

export default AddUser;

function AddUserForm({ onClose }) {
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm();

  const { addUser } = useUsers();

  const handleAddUser = (data) => {
    addUser({ ...data, createdAt: Date.now() });
    reset();
    onClose();
  };

  return (
    <form
      className="grow p-4 lg:p-12 flex flex-col gap-8 items-start justify-start"
      onSubmit={handleSubmit(handleAddUser)}
    >
      <h1 className="text-2xl font-bold">User Information</h1>
      <TextInput
        placeholder={"eg: You Example"}
        label={"Name of User"}
        type={"text"}
        error={errors["name"]?.message}
        register={{
          ...register("name", {
            required: { value: true, message: "This field is required" },
          }),
        }}
      />
      <TextInput
        placeholder={"eg: you@example.com"}
        label={"Email id of user"}
        type={"email"}
        error={errors["email"]?.message}
        register={{ ...register("email", emailValidations) }}
      />
      <SelectInput
        label={"Role"}
        options={userRoleOptions}
        error={errors["role"]?.message}
        defaultValue="admin"
        register={{ ...register("role") }}
      />
      <div className="w-full flex gap-5 justify-center">
        <Button onClick={onClose} type="button" classes="btn-tertiary">
          Cancel
        </Button>
        <Button classes="btn-primary">Add</Button>
      </div>
    </form>
  );
}

const userRoleOptions = [
  {
    label: "Sales",
    value: "sales",
  },
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Owner",
    value: "owner",
  },
];
