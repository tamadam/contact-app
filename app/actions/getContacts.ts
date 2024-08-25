import { RawContactType } from "../types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/contacts`;

const getContacts = async (): Promise<RawContactType[]> => {
  const contacts = await fetch(URL, {
    cache: "no-cache"
  });

  return contacts.json();
};

export default getContacts;