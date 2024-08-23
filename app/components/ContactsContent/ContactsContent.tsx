import { ContactType } from "@/app/types";
import ContactListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactsContent.module.css";

interface ContactsContentProps {
  contacts: ContactType[];
}

const ContactsContent = ({ contacts }: ContactsContentProps) => {
  return (
    <div className={styles.contactsContent}>
      <div className={styles.contactList}>
        {contacts.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactsContent;
