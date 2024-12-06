import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';
import validationSchema from '../ValidationSchema/ValidationSchema';

const RegisterForm = () => {
  const initialValues = {
    name: '', 
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('https://connections-api.goit.global/users/signup', {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      console.log('Użytkownik zarejestrowany:', response.data);
      alert('Konto zostało pomyślnie utworzone!');
      resetForm();
    } catch (error) {
      console.error('Błąd rejestracji:', error.response?.data || error.message);
      alert('Błąd rejestracji. Sprawdź dane i spróbuj ponownie.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Imię</label>
            <Field type="text" id="name" name="name" placeholder="Wpisz swoje imię" />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" placeholder="Wpisz swój email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="password">Hasło</label>
            <Field type="password" id="password" name="password" placeholder="Wpisz swoje hasło" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="confirmPassword">Potwierdź hasło</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Potwierdź swoje hasło" />
            <ErrorMessage name="confirmPassword" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Wysyłanie...' : 'Zarejestruj się'}
          </button>

          <p>
            Masz już konto? <Link to="/login">Zaloguj się</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
