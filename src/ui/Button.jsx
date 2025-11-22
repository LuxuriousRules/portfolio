function Button ({children, onClick, type="button"}){
   return(
    <button className="ui-button"  type={type} onClick={onClick}>
        {children}
    </button>
   );
}

export default Button;