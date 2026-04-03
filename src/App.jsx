import Button from './components/Button';
import Input from './components/Input';
function App() {
  const handleClick = () => {
    alert("Кнопка");
  };
  const handleChange = (event) =>{
    console.log(`Написано: ${event.target.value}`);
  };
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
     <div className='bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-6'>
      <h1 className="text-2xl font-bold text-gray-800 text-center">Як день пройшов?</h1>
      <Input type="text" placeholder = "Введіть відповідь" onChange={handleChange}></Input>
      <Button  text="Зроби свій день краще" type="button" onClick={handleClick}></Button>
     </div>
     </div>
    </>
    
  )
}

export default App
