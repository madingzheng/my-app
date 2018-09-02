import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './Store';
import { observer } from 'mobx-react'

@observer
class TodoList extends Component{

    state ={
      inputValue: ''
    };

    render() {
        return (
            <div>
                <header style={{marginTop:20,marginLeft:20}}>
                    <Input placeholder="todo info"
                           style={{width:300,marginRight:15}}
                           onChange={this.handleChangeInput.bind(this)}
                           value={this.state.inputValue}
                    />
                    <Button type="primary" onClick={this.handleButtonClick.bind(this)}>提交</Button>
                    <List
                        bordered
                        footer={<div>{store.list.length} item(s) unfinished</div>}
                        dataSource={store.list}
                        renderItem={(item,index) => (<List.Item  onClick={this.handleListClick.bind(this,index)}>{item}</List.Item>)}
                        style={{marginTop:20,width:380}}
                    />
                </header>
            </div>
        )
    }

    handleChangeInput(e) {
        var inputValue = e.target.value;
        this.setState({
            inputValue
        });
    }

    handleButtonClick() {
        var inputValue = this.state.inputValue;
        store.listPush(inputValue);
        this.setState({
            inputValue: ''
        })
    }

    handleListClick(index) {
       store.listDelete(index);
    }
}



export default TodoList