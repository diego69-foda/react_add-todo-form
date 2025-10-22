import { TodoInfo } from "../TodoInfo";

export const TodoList = ( todo:HTMLCollection ) => {
    return ( List.map((todo) => ( <TodoInfo todo={todo} key={todo.id} /> ) ) );
};
