// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "REMOVE_FORM":
      return state.filter((form) => {
        return form.id !== action.payload;
      });
    case "ADD_FORM":
      return [action.payload, ...state];
    case "EDIT_FORM":
      const updateForm = action.payload;

      const updateForms = state.map((form) => {
        if (form.id === updateForm.id) {
          return updateForm;
        }
        return form;
      });
      return updateForms;

    default:
      return state;
  }
};
