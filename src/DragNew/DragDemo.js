import React, { Component } from 'react';
import './DragDemo.scss'
import { DndProvider, useDrag, useDrop } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

const itemTypes = {
    LIST: "list"
  };

const DragItem = props => {
    // useDrag()
    const [{ isDragging }, drag] = useDrag({
      item: {
        type: itemTypes.LIST,
        name: props.name,
        // 定义拖拽元素的类型 只有当推拽元素的类型和容器接受的类型一致,拖拽元素才可以放置到容器内
      },
      collect: monitor => ({
        isDragging: !!monitor.isDragging()
        // 定义一些拖拽过程中的方法
      })
    });
    const style = {
      backgroundColor: isDragging ? 'yellow' : ''
    }
    // ref={drag} 操作底层元素
    return <div ref={drag} style={style} className="drag-item">{props.name}</div>;
  };

const DropContainer = props =>{

    const [{ canDrop}, drop] = useDrop({
        accept:itemTypes.LIST,
        drop:(item) =>{
            // 打印出放置的时候的item信息,需要获取拖拽元素的name
            console.log(item)
            // 放置的时候对item执行操作,item.name移动的元素的name,props.id 接受容器的id
            props.onItemDrop(item.name, props.id)

        },
        
        collect: mon => ({
            isOver: !!mon.isOver(),
            canDrop: !!mon.canDrop(),
          }),
    })
    const style = {backgroundColor: canDrop ? 'lightgreen' : ''}
    return (
        <div ref={drop} style={style} className={props.className}>
          {
            props.children
          }
        </div>
      )

}

class DragDemo extends Component {
    state={
        listOne: ['item a', 'item b', 'item c'],
        listTwo: ['item d', 'item e', 'item f','item h'],
        listThree: ['item i',  'item j'],
    }
    onItemDrop = (itemName, containerKey) => {
        const newListOne = this.state.listOne.filter(item => item !== itemName)
        const newListTwo = this.state.listTwo.filter(item => item !== itemName)
        const newListThree = this.state.listThree.filter(item => item !== itemName)
    
        // eslint-disable-next-line default-case
        switch (containerKey) {
          case 'listOne':
            newListOne.push(itemName);
            break
          case 'listTwo':
            newListTwo.push(itemName);
            break
          case 'listThree':
            newListThree.push(itemName);
            break
        }

    
        this.setState({
          listOne: newListOne,
          listTwo: newListTwo,
          listThree: newListThree,
        })
        
      } 
    
    render() {
        return (
            <DndProvider backend={HTML5Backend} >
                <div className="container">
                    {/* 给放置组件容器一个id 来区分放在哪一个容器里 */}
                    <DropContainer className="drop-container" onItemDrop={this.onItemDrop} id="listOne">
                        {
                            this.state.listOne.map(item =>(
                                <DragItem name={item} key={item} />
                            ))
                        }
                    </DropContainer>

                    <DropContainer className="drop-container" onItemDrop={this.onItemDrop} id="listTwo">
                        {
                            this.state.listTwo.map(item =>(
                                <DragItem name={item} key={item} />
                            ))
                        }
                    </DropContainer>

                    <DropContainer className="drop-container" onItemDrop={this.onItemDrop} id="listThree">
                        {
                            this.state.listThree.map(item =>(
                                <DragItem name={item} key={item} />
                            ))
                        }
                    </DropContainer>
                </div>
            </DndProvider>
        );
    }
}

export default DragDemo;