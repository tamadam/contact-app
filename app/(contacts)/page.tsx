import getContacts from "../actions/getContacts";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactsContent from "../components/ContactsContent/ContactsContent";
import ContactsHeader from "../components/ContactsHeader/ContactsHeader";
import { ContactType, RawContactType } from "../types";
import styles from "./page.module.css";

export default async function ContactsPage() {
  const contacts: RawContactType[] = await getContacts();

  const formattedContacts: ContactType[] = contacts.map((contact) => ({
    id: contact.id,
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    createdAt: new Date(contact.createdAt),
    updatedAt: new Date(contact.updatedAt),
  }));

  console.log(formattedContacts);

  return (
    <main className={styles.contactsWrapper}>
      <ContactsHeader />
      <ContactsContent />
      <ContactForm contactData={true} />
    </main>
  );
}
