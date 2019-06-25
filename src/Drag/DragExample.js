import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import "./main.css";

const itemTypes = {
  LIST: "list"
};

const DragItem = props => {
  const [{ isDrag }, drag] = useDrag({
    item: {
      type: itemTypes.LIST,
      data: props.name,
      // from: props.listId,
    },
    collect: monitor => ({
      isDrag: !!monitor.isDragging()
    })
  });
  const style = {
    backgroundColor: isDrag ? 'yellow' : 'white'
  }
  return <div ref={drag} style={style}>{props.name}</div>;
};



const DropContainer = props => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: itemTypes.LIST,
    drop: (item) => {
      console.log(item)
      // props.onItemDrop()
      props.onItemDrop(item.data, props.id)
    },
    collect: mon => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop(),
    }),
  })

  const style = {backgroundColor: canDrop ? 'lightgreen' : 'lightblue'}
  console.log(isOver)
  return (
    <div ref={drop} style={style} className={props.className}>
      {
        props.children
      }
    </div>
  )
}



export default class DragExample extends React.Component {

  state = {
    listOne: ['item a', 'item b', 'item c'],
    listTwo: ['item d', 'item e', 'item f'],
    listThree: ['item g', 'item h', 'item i'],

    totalLists: [
      {
        listId: '#123',
        lists: ['item 1', 'item 2', ]
      },
      {
        listId: '#234',
        lists: ['item 1', 'item 2', ]
      },
      {
        listId: '#345',
        lists: ['item 1', 'item 2', ]
      }
    ]
  }

  onItemDrop = (itemName, containerKey) => {
    const newListOne = this.state.listOne.filter(item => item !== itemName)
    const newListTwo = this.state.listTwo.filter(item => item !== itemName)
    const newListThree = this.state.listThree.filter(item => item !== itemName)

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

    // const list = this.totalLists.findOne(li => li.id === containerKey)

    this.setState({
      listOne: newListOne,
      listTwo: newListTwo,
      listThree: newListThree,
    })
    
  } 

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="container">
          <DropContainer onItemDrop={this.onItemDrop} id="listOne">
            {
              this.state.listOne.map(item => (
                <DragItem name={item} key={item} />
              ))
            }
            
          </DropContainer>

          <DropContainer onItemDrop={this.onItemDrop} id="listTwo">
            {
              this.state.listTwo.map(item => (
                <DragItem name={item} key={item} />
              ))
            }
          </DropContainer>

          <DropContainer onItemDrop={this.onItemDrop} id="listThree">
            {
              this.state.listThree.map(item => (
                <DragItem name={item} key={item} />
              ))
            }
          </DropContainer>
        </div>
      </DndProvider>
    );
  }
}
