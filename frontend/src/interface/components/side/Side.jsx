import './Side.css'

function TodoItem({ item }) {
    return <div className="todo-item">
        {item}
    </div>
}

export default function Side() {
    return <div className="side">
        <div className="todo-header">To Do</div>
        <ul className="todo-list">
            <TodoItem item={"I&CSCI 33 Set 6" } />
            <TodoItem item={"I&CSCI 6D HW8" } />
            <TodoItem item={"Writing 60 Multimodal Annotated Bibliography" } />
            <TodoItem item={"ML Course Module 3.4" } />
        </ul>
    </div>
}