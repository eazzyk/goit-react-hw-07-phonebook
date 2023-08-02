import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, getFilteredContact } from 'redux/selectors';
import * as contactsOperations from 'redux/operations';
import * as filterActions from 'redux/filterSlice';
import { useCallback } from 'react';

export const useContacts = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContact);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const fetchContacts = useCallback(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const addContact = newContact => {
    dispatch(contactsOperations.addContact(newContact));
  };

  const removeContact = id => {
    dispatch(contactsOperations.removeContact(id));
  };

  const setFilter = filter => {
    dispatch(filterActions.setFilter(filter));
  };

  return {
    filter,
    contacts,
    filteredContacts,
    addContact,
    setFilter,
    removeContact,
    fetchContacts,
  };
};
