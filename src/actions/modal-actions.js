export function handleFormSubmit(formData) {
  return {
    type: 'HANDLE_FORM_SUBMIT',
    payload: formData,
  };
}

export function handleFormCancel(formData) {
  return {
    type: 'HANDLE_FORM_CANCEL',
    payload: formData,
  };
}
