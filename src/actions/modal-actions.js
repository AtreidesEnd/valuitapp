export function handleFormSubmit(form) {
  console.log(form);

  if (form.type = 'NEW_FOLDER') {
    return {
      type: 'ADD_NEW_FOLDER',
      payload: form.data,
    };
  }

  if (form.type = 'NEW_DRIVER') {
    return {
      type: 'ADD_NEW_DRIVER',
      payload: form.data,
    };
  }
}

export function handleFormCancel() {
  return {type: 'CANCEL_MODAL'};
}

export function triggerModal(context) {
  return {
    type: context.type,
    payload: context.data
  };
}
