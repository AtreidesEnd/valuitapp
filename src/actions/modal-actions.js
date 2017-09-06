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

export function triggerValModal(modalData) {
  console.log('Firing trigger new val modal action');
  console.log(modalData);
  return {
    type: 'TRIGGER_NEW_VAL_MODAL',
    payload: modalData
  };
}
