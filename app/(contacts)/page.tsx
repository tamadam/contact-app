import { Suspense } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactsContent from "../components/ContactsContent/ContactsContent";
import ContactsHeader from "../components/ContactsHeader/ContactsHeader";
import styles from "./page.module.css";
import ContactsContentLoading from "../components/ContactsContent/ContactsContentLoading";

export const dynamic = "force-dynamic";

const ContactsPage = async () => {
  return (
    <main className={styles.contactsWrapper}>
      <ContactsHeader />
      <Suspense fallback={<ContactsContentLoading />}>
        <ContactsContent />
      </Suspense>

      <ContactForm />
    </main>
  );
};

export default ContactsPage;
