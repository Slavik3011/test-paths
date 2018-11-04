export default function(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return !state;
    case 'CLOSE_MODAL':
      return 0;
    default:
      return state;
  }
}