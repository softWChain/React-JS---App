import React from 'react';

export class TodoForm extends React.Component {

    constructor() {
        super();
        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {

        e.preventDefault();
        const inp = document.getElementById('todoInput');
        const val = inp.value;
        inp.value = "";
        this.props.propTask(val);
    }

    render() {
        return (

            <div>
                <div className="todo type1">
                    <form className="input-wrapper" onSubmit={this.addTask}>
                        <input id="todoInput" type="text" className="add-todo" placeholder="What needs to be?" autoComplete="off" />

                    </form>
                </div>
                <button onClick={this.addTask} type="button" className="add-btn"></button>
            </div>

        )

    }


}