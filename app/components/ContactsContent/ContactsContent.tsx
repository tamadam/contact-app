import { ContactType, RawContactType } from "@/app/types";
import ContactListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactsContent.module.css";
import getContacts from "@/app/actions/getContacts";

const ContactsContent = async () => {
  const rawContacts: RawContactType[] = await getContacts();

  const contacts: ContactType[] = rawContacts.map((contact) => ({
    id: contact.id,
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    imageUrl: contact.imageUrl,
    createdAt: new Date(contact.createdAt),
    updatedAt: new Date(contact.updatedAt),
  }));

  return (
    <div className={styles.contactsContent}>
      <div className={styles.contactList}>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactListItem key={contact.id} contact={contact} />
          ))
        ) : (
          <p>No contacts available</p>
        )}
      </div>
    </div>
  );
};

export default ContactsContent;
