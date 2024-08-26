const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (state.todoList.includes(action.payload)) {
        alert("이미 존재하는 계획입니다.");
        return state;
      }
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        inputValue: "",
      };
      case "REMOVE_TODO":{
        return{
            ...state,
            todoList : state.todoList.filter((todo)=> todo!==action.payload)
        }};
        case "SET_INPUT_VALUE":
        return{
            ...state,
            inputValue: action.payload
        }
        default:
            return state;
      }
  }
};
