function Button({text, type, onClick}){
    return (
        <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 active:scale-95 transition-all duration-200" onClick={onClick} type={type}>{text}</button>
    );
}
export default Button;