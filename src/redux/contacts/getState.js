export const getContacts = state => state.contacts.contacts;
export const getFilter = state =>
  state && state.filter && state.filter.filterValue;
