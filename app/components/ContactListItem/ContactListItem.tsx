import Image from "next/image";
import styles from "./ContactListItem.module.css";
import Button from "../Button/Button";

interface ContactListItemProps {
  contactName: string;
  contactPhone: string;
  contactImageUrl?: string;
}

const ContactListItem = ({
  contactName,
  contactPhone,
  contactImageUrl = "",
}: ContactListItemProps) => {
  return (
    <div className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <Image
          src={contactImageUrl ? contactImageUrl : "/images/profile-big.png"}
          alt="profile"
          width={40}
          height={40}
          className={styles.contactImage}
        />
        <div className={styles.contactDetails}>
          <span className={styles.contactName}>{contactName}</span>
          <span className={styles.contactPhone}>{contactPhone}</span>
        </div>
      </div>
      <div className={styles.contactActions}>
        <Button>
          <Image src="/mute.svg" alt="mute" width={24} height={24} />
        </Button>
        <Button>
          <Image src="/call.svg" alt="call" width={24} height={24} />
        </Button>
        <Button>
          <Image src="/more.svg" alt="more" width={24} height={24} />
        </Button>
      </div>
    </div>
  );
};

export default ContactListItem;
