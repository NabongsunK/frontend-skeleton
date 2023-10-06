import ReactDOM from "react-dom/client";
import Modal from "../components/layout/CustomModal";

const modal = {
  _open: (Component, props) => {
    console.log(props);
    const container = document.getElementById("globalModal");
    if (!container) return;
    const root = ReactDOM.createRoot(container);
    root.render(<Component {...props}></Component>);
    // ReactDOM.render(<Component {...props}></Component>, container);
  },

  show: props => {
    props.title = props.title || '알림 메세지';
    modal._open(Modal, props);
  },
};

export default modal;