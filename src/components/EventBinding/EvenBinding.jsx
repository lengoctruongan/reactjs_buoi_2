import React, { Component } from 'react'

export default class EvenBinding extends Component {
    handleClick=()=>{
        alert('Hello Guy')
    }
    showMessage=(mess)=>{
        alert("hello"+mess)
    }
    render() {
        return (
            <div>
                <h3>Cách 1 truyền callback function để xử lý sự kiện</h3>
                <button onClick={this.showMessage.bind(this,'Cybersoft')}>Click me</button>
                <hr/>
                {/**định nghĩa sự kiện clik , định nghĩa trước một hàm arrow function */}
                <h3>Cách 2: Dùng arrow function</h3>
                <button onClick={()=>this.handleClick()}>Click me</button>
                <button onClick={()=>this.showMessage('Cyber')}>Click me</button>
            </div>
        )
    }
}
