import { useState } from 'react';
import { 
    AddCategory,
    GifGrid
} from './components';

function GifExpertApp() {
    const [categories, setCategories] = useState(['Crash Landing On You', 'Extraordinary Attorney Woo']);

    const onAddCategory = (inputValue) => {
        if (categories.includes(inputValue)) return;
        setCategories([inputValue, ...categories])
    }

    return (
        <>
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory = { onAddCategory }/>
        { 
            categories.map( category => <GifGrid 
                                            key = {category} 
                                            category = {category} />) 
        }
        </>
    )
}

export default GifExpertApp;