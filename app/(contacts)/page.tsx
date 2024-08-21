import Button from "../components/Button/Button";
import ContactListItem from "../components/ContactListItem/ContactListItem";
import styles from "./page.module.css";
import Image from "next/image";

export default function ContactsPage() {
  return (
    <main className={styles.contactsWrapper}>
      <div className={styles.contactsHeader}>
        <div
          className={[
            styles.headerItem,
            styles.headerBackButton,
            "text-cyan-50",
          ].join(" ")}
        >
          <Button variant="secondary">
            <Image
              src="/backButton.svg"
              alt="back button"
              width={24}
              height={24}
              priority
            />
          </Button>
        </div>
        <div
          className={[
            styles.headerItem,
            styles.headerText,
            "text-cyan-50",
            "text-4xl",
          ].join(" ")}
        >
          Contacts
        </div>
        <div
          className={[
            styles.headerItem,
            styles.headerOptions,
            "text-cyan-50",
          ].join(" ")}
        >
          <div className="settings">
            <Button variant="secondary">
              <Image
                src="/settings.svg"
                alt="settings"
                width={24}
                height={24}
                priority
              />
            </Button>
          </div>
          <div className="profile">
            <Button variant="secondary">
              <Image
                src="/profile.svg"
                alt="profile picture"
                width={24}
                height={24}
                priority
              />
            </Button>
          </div>
          <div className="addButton">
            <Button variant="priority">
              <Image
                src="/add.svg"
                alt="plus sign"
                width={24}
                height={24}
                priority
              />
              Add new
            </Button>
          </div>
        </div>
        <div
          className={[
            styles.headerItem,
            styles.headerLightDark,
            "text-cyan-50",
          ].join(" ")}
        >
          <Button variant="secondary">
            <Image
              src="/colorSwitch.svg"
              alt="color switch"
              width={24}
              height={24}
              priority
            />
          </Button>
        </div>
      </div>
      <div className={styles.contactsContent}>
        <div className={styles.contactList}>
          <ContactListItem contactName="Test User" contactPhone="12345" />
          <ContactListItem contactName="Test User2" contactPhone="12345" />
          <ContactListItem contactName="Test User3" contactPhone="12345" />
          <ContactListItem contactName="Test User4" contactPhone="12345" />
        </div>
      </div>
    </main>
  );
}
