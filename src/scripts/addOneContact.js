import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contactlist = await readContacts();
    const newContact = createFakeContact();
    await writeContacts([...contactlist, newContact]);
  } catch (err) {
    console.log(err);
  }
};

addOneContact();
