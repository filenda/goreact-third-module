const INITIAL_STATE = [
  { id: 1, text: "Fazer café" },
  { id: 2, text: "Estudar react" }
];
//reducers execute upon 'action' calls

/**
 * 'state' parameter is the state before the action call (before altering)
 * 'action' is the action fired by our app. The reducers listen to all the actions
 * regardless of which component fired it
 */
export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }];
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
