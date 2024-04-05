import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const SearchSchema = Yup.object().shape({
  searchInput: Yup.string().required("Required"),
});

const SearchForm = ({ onSetSearchTitle }) => {
  const handleSubmit = (values) => {
    onSetSearchTitle(values.searchInput);
    console.log("values.searchInput: ", values.searchInput);
  };
  return (
    <Formik
      initialValues={{
        searchInput: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={SearchSchema}
    >
      <Form>
        <label>
          <Field
            tupe="text"
            name="searchInput"
            placeholder="Enter search title..."
          ></Field>
          <ErrorMessage name="searchInput" component="span" />
        </label>
        <button type="submit">Search 🔍</button>
      </Form>
    </Formik>
  );
};
export default SearchForm;
