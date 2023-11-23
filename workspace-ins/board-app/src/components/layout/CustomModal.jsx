import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState, useRef } from 'react';

const CustomModal = function({title, body, footer, autoClose, next}){
  console.log(arguments);
  if(!footer && autoClose === undefined) autoClose = true;
  if(footer && footer.confirmBtn){
    footer.confirmBtn.text = footer.confirmBtn.text || '확인';
  }
  if(footer && footer.cancelBtn){
    footer.cancelBtn.text = footer.cancelBtn.text || '취소';
  }
  
  const [show, setShow] = useState(false);
  const timer = useRef(null);
  
  const handleClose = () => {
    setShow(false);
    // autoClose 시간 후에 다시한번 호출되지 않도록 타이머 취소
    clearTimeout(timer.current);
    next?.();
  }

  const handleConfirm = () => {
    // confirm 버튼을 눌렀을 때 실행할 함수가 있으면 호출한다.
    footer?.confirmBtn?.fn?.();
    handleClose();
  };
  const handleCancel = () => {
    // cancel 버튼을 눌렀을 때 실행할 함수가 있으면 호출한다.
    footer?.cancelBtn?.fn?.();
    handleClose();
  };

  console.log('show...', show);

  useEffect(() => {
    setShow(true);
    setTimeout(()=>{console.log('show', show);}, 1000);
    
    if(autoClose){
      // autoColse가 true일 경우 기본값 1.5초 후에 닫기
      // autoClose가 Number일 경우 지정된 시간 후에 닫기
      const timeout = typeof autoClose == 'number' ? autoClose : 1500;
      timer.current = setTimeout(handleClose, timeout);
    }
  }, []);

  

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{body}</p>
      </Modal.Body>
      {footer && 
        <Modal.Footer>
          { footer.cancelBtn && <Button variant="danger" onClick={handleCancel}>{footer.cancelBtn.text}</Button> }
          { footer.confirmBtn && <Button variant="danger" onClick={handleConfirm}>{footer.confirmBtn.text}</Button> }
        </Modal.Footer>
      }
    </Modal>
  );
};

export default CustomModal;