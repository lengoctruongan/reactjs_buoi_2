import React, { Component } from 'react'

export default class RenderWhithState extends Component {
     constructor(props){
         super(props);
         this.state={
             isLogin:false
            }
     }
    //  Thuộc tính có sẵn của component 
    userName="Hello Ân"
   
    login=()=>{
        let newState={
            isLogin:true
        }
        this.setState(newState,()=>{console.log(newState)})
        //là một phương thức có sẵn làm hai nhiệm vụ, 1 là thay đổi giá trị state 2 là gọi this.render lại daio diện
        //nhận vào một state mới để render lại
        //Là một phương thức bất đồng bộ
        
    }
        
    
    renderLogin=()=>{
        if(this.isLogin){
            return <p>Hello {this.userName}</p>
        }
        return <button onClick={()=>{this.login()}}>Đăng nhập</button>
    }
 
    render() {
        return (
            <div>
                {/* {this.isLogin ? <p>Hello {this.userName}</p>:<button>Đăng nhập </button>} */}
                
                {this.renderLogin()}
            </div>
        )
    }
}
