function Input({placeholder, type, onChange}){
    return (
        <input className='w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm' placeholder={placeholder} onChange={onChange} type = {type}/>
    );
}
export default Input;