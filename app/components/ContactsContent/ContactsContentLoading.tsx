import Spinner from "../Spinner/Spinner";
import styles from "./ContactsContent.module.css";

const ContactsContentLoading = () => {
  return (
    <div className={styles.contactsContent}>
      <div className="flex items-center gap-2 h-fit text-xl">
        <span>Loading contacts...</span>
        <Spinner />
      </div>
    </div>
  );
};

export default ContactsContentLoading;
