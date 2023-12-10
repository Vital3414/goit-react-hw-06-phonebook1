export const getContacts = state => state.contacts;
export const getFilter = state =>
  state && state.filter && state.filter.filterValue;
