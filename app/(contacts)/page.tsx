import ContactForm from "../components/ContactForm/ContactForm";
import ContactsContent from "../components/ContactsContent/ContactsContent";
import ContactsHeader from "../components/ContactsHeader/ContactsHeader";
import styles from "./page.module.css";

export default function ContactsPage() {
  return (
    <main className={styles.contactsWrapper}>
      <ContactsHeader />
      <ContactsContent />
    </main>
  );
}
