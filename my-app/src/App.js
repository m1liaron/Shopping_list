import './App.css';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  return (
    <div className="App">
     <h2 className='title'>Shopping list</h2>
     <div className="shopping_list">
      <form onSubmit={onSubmit}> 
          <div className="container">
            <h2>Items to buy</h2>
            <input 
              type="text" 
              name='item'
              placeholder='add new item'
              required/>
            <button>add</button>
          </div>
      </form>
      <ul>
      {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))}
      </ul>
     </div>
    </div>
  );
}

function Item({item, onRemoveItem}) {
  return (
    <li>
      {item}
      <button className='delete' onClick={() => onRemoveItem(item)}>
        x
      </button>
    </li>
  )
}

export default App;
