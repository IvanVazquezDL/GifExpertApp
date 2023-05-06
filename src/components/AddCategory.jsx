import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('Crash Landing On You');
    
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() <= 1) return;
        onNewCategory(inputValue.trim());
    }

    return(
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
  
    )
}