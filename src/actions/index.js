export const setSearch = (data) => ({
  type: 'SEARCH',
  payload: data
});

export const toggleModal = () => ({
  type: 'TOGGLE_MODAL',
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});