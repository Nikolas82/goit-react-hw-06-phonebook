export const selectFilterContacts = state =>
  state.contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.filter;
