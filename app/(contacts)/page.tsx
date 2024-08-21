import Button from "../components/Button/Button";
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, sunt
        esse, facilis quaerat, distinctio doloremque voluptatibus ipsam fuga at
        eum eveniet soluta dignissimos? Tempora quaerat omnis natus accusantium
        aut distinctio provident, ab architecto labore a veniam culpa pariatur
        modi, cumque molestiae minus. In neque nemo cumque sint repellat, totam
        debitis iusto perferendis obcaecati ipsa ratione cum, officiis qui
        aspernatur? Inventore id laudantium cumque necessitatibus quaerat
        perferendis, aperiam temporibus consectetur rerum eligendi magni fugit
        repudiandae laborum voluptates incidunt ab at minus repellendus eius
        natus molestias. Aspernatur harum eius deleniti est iste molestiae
        blanditiis numquam. Animi maiores sit quo, quam illum, aspernatur
        laborum quas libero officiis saepe optio cumque sint magni tempore
      </div>
    </main>
  );
}
