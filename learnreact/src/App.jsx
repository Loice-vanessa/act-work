

const App = () => {
  const MyColors = ['red', 'green', 'blue', 'yellow', 'orange'];

  const colorsString = MyColors .join(', ');

  const modifiedColors = [...MyColors ];
  modifiedColors.splice(1, 2, 'purple', 'pink'); 

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col ">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">Colors String</h1>
        <p className="text-lg">{colorsString}</p> 
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">Modified Colors Array</h1>
        <p className="text-lg">{modifiedColors.join(', ')}</p> {/* Display the modified colors array */}
      </div>
    </div>
  );
};

export default App;
