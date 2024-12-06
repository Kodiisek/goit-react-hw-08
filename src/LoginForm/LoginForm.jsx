import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Niepoprawny format email').required('Email jest wymagany'),
    password: Yup.string().required('Hasło jest wymagane'),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
        
      const response = await axios.post('https://connections-api.goit.global/users/login', {
        email: values.email,
        password: values.password,
      });
      
      console.log('Użytkownik zalogowany:', response.data);
      alert('Zalogowano pomyślnie!');
      resetForm();
    } catch (error) {
      console.error('Błąd logowania:', error.response?.data || error.message);
      alert('Błąd logowania. Sprawdź dane i spróbuj ponownie.');
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
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" placeholder="Wpisz swój email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="password">Hasło</label>
            <Field type="password" id="password" name="password" placeholder="Wpisz swoje hasło" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Wysyłanie...' : 'Zaloguj się'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;