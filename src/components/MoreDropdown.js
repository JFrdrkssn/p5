import React from "react";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "../styles/MoreDropdown.module.css";
import appStyles from "../App.module.css";

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className={`${appStyles.Content} text-center`}
        popperConfig={{ strategy: "fixed" }}>
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleEdit}
            aria-label="edit">
            <i className="fas fa-edit" />
          </Dropdown.Item>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleDelete}
            aria-label="delete">
            <i className="fas fa-trash-alt" />
          </Dropdown.Item>
        </OverlayTrigger>
      </Dropdown.Menu>
    </Dropdown>
  );
};
