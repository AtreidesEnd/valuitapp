export default function(state = null, action) {

  var modalState = {
    isActive: true,
    activeModal: 'NewFolder',
    modalData: {},
  }

  return modalState;
}
