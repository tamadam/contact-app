import ContactListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactsContent.module.css";

const ContactsContent = () => {
  return (
    <div className={styles.contactsContent}>
      <div className={styles.contactList}>
        <ContactListItem contactName="Test User" contactPhone="12345" />
        <ContactListItem contactName="Test User2" contactPhone="12345" />
        <ContactListItem contactName="Test User3" contactPhone="12345" />
        <ContactListItem contactName="Test User4" contactPhone="12345" />
      </div>
    </div>
  );
};

export default ContactsContent;
