import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import styles from "../styles/MoreDropdown.module.css";
import appStyles from "../App.module.css";
import { useHistory } from "react-router";

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

export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu className={appStyles.Content}>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Edit profile</Tooltip>}>
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={() => history.push(`/profiles/${id}/edit`)}
            aria-label="edit-profile">
            <i className="fas fa-edit" />
          </Dropdown.Item>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Change username</Tooltip>}>
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={() => history.push(`/profiles/${id}/edit/username`)}
            aria-label="edit-username">
            <i className="far fa-id-card" />
          </Dropdown.Item>
        </OverlayTrigger>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Change password</Tooltip>}>
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={() => history.push(`/profiles/${id}/edit/password`)}
            aria-label="edit-password">
            <i className="fas fa-key" />
          </Dropdown.Item>
        </OverlayTrigger>
      </Dropdown.Menu>
    </Dropdown>
  );
}
