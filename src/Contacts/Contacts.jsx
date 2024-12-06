import { useEffect, useState } from 'react';
import axios from 'axios';

const Contacts = () => {

  const [contacts, setContacts] = useState([]);

  const [error, setError] = useState(null);

  const token = localStorage.getItem('authToken'); 

  useEffect(() => {

    const fetchContacts = async () => {
      try {
        const response = await axios.get('https://connections-api.goit.global/contacts', {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        
        setContacts(response.data.contacts);
      } catch (err) {
        console.error('Błąd podczas pobierania kontaktów:', err);
        setError('Nie udało się pobrać kontaktów. Spróbuj ponownie.');
      }
    };

    fetchContacts();
  }, [token]); 

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Twoje Kontakty</h2>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <li key={contact._id}>{contact.name}</li> 
          ))}
        </ul>
      ) : (
        <p>Brak kontaktów.</p>
      )}
    </div>
  );
};

export default Contacts;
