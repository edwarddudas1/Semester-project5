import "../components/Modal.css";
import logo from "../components/img/logo.png";
import { IoMdExit } from "react-icons/io";
import { useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button className="exit" onClick={() => setOpen(true)}>
          Exit <IoMdExit style={{ margin: "-3px"}} />
        </button>
      )}

      {open && (
        <div className="modal-container">
          <img src={logo} alt="" />
          <div className="modal-text">
            <p>
              Are you sure you want to <span>log out?</span>
            </p>
          </div>
          <div className="modal-buttons">
            <button className="logout">Logout</button>
            <button className="cancel" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
