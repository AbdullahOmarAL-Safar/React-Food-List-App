import List from './List.jsx'

function App() {

    const fruits = [{id: 1,name: "apple", calories: 95},
                {id: 2,name: "apple", calories: 122},
                {id: 3,name: "orange", calories: 42},
                {id: 4,name: "banana", calories: 73},
                {id: 5,name: "panaple", calories: 38}];

                
    // fruits.sort((a,b) => a.name.localeCompare(b.name)) // ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) // REVERSE ALPHABETICAL
    // fruits.sort((a,b) => a.calories - b.calories) // NUMERIC
    // fruits.sort((a,b) => b.calories - a.calories) // REVERSE NUMERIC

// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

const Vegtables = [{id: 6,name: "tomato", calories: 132},
                {id: 7,name: "potato", calories: 53},
                {id: 8,name: "corn", calories: 73},
                {id: 9,name: "carrots", calories: 83},
                {id: 10,name: "celery", calories: 108}];
  return (
    <>
    {fruits.length > 0 && <List item={fruits} cetagory="Fruits"/>}
    {Vegtables.length > 0 && <List item={fruits} cetagory="Vegtables"/>}
    </>
  );
}

export default App;
