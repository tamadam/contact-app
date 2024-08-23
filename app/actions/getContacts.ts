import { RawContactType } from "../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/contacts`;

const getContacts = async (): Promise<RawContactType[]> => {
  const contacts = await fetch(URL, {
    next: {
      revalidate: 0,
    },
  });

  return contacts.json();
};

export default getContacts;