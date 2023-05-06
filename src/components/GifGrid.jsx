import { useFecthGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFecthGifs(category);
    
    return(
        <>
            <div className="text-center p-1">
                <h3>{category}</h3>
            </div>
            { isLoading && <h4>Loading...</h4>}
            <div className="card-grid">
                { images.map( image => 
                    <GifItem 
                        key = {image.id} 
                        {...image} 
                    />
                )}
            </div>
        </>
    )
}