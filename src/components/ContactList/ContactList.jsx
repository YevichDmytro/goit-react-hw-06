import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
import { selectContacts } from '../../redux/selectors';

// const ContactList = ({ value, onDelete }) => {
//   return (
//     <>
//       {value.length > 0 ? (
//         <ul className={.list}>
//           {value.map(contact => {
//             return (style
//               <li key={contact.id} className={style.item}>
//                 <Contact
//                   contactName={contact.name}
//                   contactNumber={contact.number}
//                   contactId={contact.id}
//                   onDelete={onDelete}
//                 />
//               </li>
//             );
//           })}
//         </ul>
//       ) : (
//         <span className={style.emptyList}>No one contact yet</span>
//       )}
//     </>
//   );
// };

const ContactList = () => {
  const value = useSelector(selectContacts);

  return (
    <>
      {value.length > 0 ? (
        <ul className={style.list}>
          {value.map(contact => {
            return (
              <li key={contact.id} className={style.item}>
                <Contact
                  contactName={contact.name}
                  contactNumber={contact.number}
                  contactId={contact.id}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <span className={style.emptyList}>No one contact yet</span>
      )}
    </>
  );
};

export default ContactList;
