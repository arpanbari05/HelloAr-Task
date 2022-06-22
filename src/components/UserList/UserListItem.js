import { RiDeleteBin6Line } from "react-icons/ri";
import { useToggle } from "../../customHooks";
import { timeSince } from "../../helper";
import DeletePopup from "../DeletePopup";

function ListItem({ idx, name, role, createdAt }) {
  const deletePopup = useToggle(false);

  const formattedDate = timeSince(new Date(new Date(createdAt).toISOString()));

  return (
    <div className="grid items-center user-item">
      <div className="px-2 lg:px-5 flex items-center user-item--batch">
        {idx + 1}
      </div>
      <div className="px-2 lg:px-5 flex items-center user-item--batch">
        {name}
      </div>
      <div className="px-2 lg:px-5 flex items-center user-item--batch">
        {formattedDate}
      </div>
      <div className="px-2 lg:px-5 flex items-center capitalize user-item--batch">
        {role}
      </div>
      <div className="px-2 lg:px-5 flex items-center user-item--batch">
        <button
          onClick={deletePopup.handleOpen}
          className="bg-primary min-w-[35px] min-h-[35px] rounded-full flex items-center justify-center text-white"
        >
          <RiDeleteBin6Line size={20} />
        </button>
      </div>
      {deletePopup.show && (
        <DeletePopup
          user={{ name, role, createdAt }}
          idx={idx}
          handleClose={deletePopup.handleClose}
        />
      )}
    </div>
  );
}

export default ListItem;

// const ListitemWrapper = styled.div`
//   grid-template-columns: 1fr 4fr 3fr 3fr 2fr;

//   &:not(:last-child) {
//     border-bottom: 1px solid #aaa;
//   }

//   & > div {
//     height: 60px;
//     &:not(:last-child) {
//       border-right: 1px solid #999;
//     }
//   }
// `;
