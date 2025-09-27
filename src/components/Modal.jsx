import "../components/Modal.css";
import logo from "../components/img/logo.png";

export default function Modal() {
  return (
    <>
      <div className="modal-container">
        <img src={logo} alt="" />
        <div className="modal-text">
          <p>
            Are you sure you want to <span>log out?</span>
          </p>
        </div>
        <div className="modal-buttons">
          <button className="logout">Logout</button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
    </>
  );
}
