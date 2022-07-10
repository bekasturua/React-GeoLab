
export default function todoReducer(state, action) {
  switch (action.type) {
    case "set_todos":
      return action.data;
    case "add_todo":
      return [action.data, ...state];
    default:
      throw new Error();
  }
}
