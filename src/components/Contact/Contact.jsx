import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import style from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contactName, contactNumber, contactId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <ul className={style.list}>
        <li className={style.item}>
          <FaUser />
          <p>{contactName}</p>
        </li>
        <li className={style.item}>
          <BsFillTelephoneFill />
          <p>{contactNumber}</p>
        </li>
      </ul>
      <div>
        <Button
          onClick={() => handleDelete()}
          variant='outlined'
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default Contact;
