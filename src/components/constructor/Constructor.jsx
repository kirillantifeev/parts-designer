import { useDispatch, useSelector } from "react-redux";
import style from "./constructor.module.css"
import { useEffect, useState } from "react";


export const Constructor = () => {

    const details = useSelector((state) => state.details)

    const [overflowing, setOverflowing] = useState(false);

    useEffect(() => {
        console.log(details.sizeOccupied)
        if (details.sizeOccupied > 3125000) {
            setOverflowing(true)
        }
        if (details.sizeOccupied < 3125000) {
            setOverflowing(false)
        }
    }, [details])

    return (
        <div className={style.container}>
            <div className={style.ironSheet}>
                {Array.from({length: details.quantity}).map((_, index) => (
                    <div 
                        className={style.detail}
                        style={{ width: `${details.width / 4}px`, height: `${details.height / 4}px` }}  
                        key={index}>

                    </div>
                ))}
                
            </div>
            <div className={style.calculationsBlock}>
                <div className={style.blockSizes}>
                    <p className={style.title}>Размеры листа:</p>
                    <div className={style.blockSizesText}>
                        <p>Длина: 2500 мм.</p>
                        <p>Ширина: 1250 мм.</p>
                        <p>Площадь листа: 3125000 кв. мм.</p>
                    </div>
                    
                </div>
                <div className={style.block}>
                    {overflowing ? (<p>Лист переполнен</p>) : (
                        <div>
                            <p className={style.title}>Свободная часть листа: <em className={style.calcText}>{3125000 - details.sizeOccupied} кв. мм.</em></p>
                            <p className={style.title}>Занято деталями: <em className={style.calcText}>{details.sizeOccupied} кв. мм.</em></p>
                        </div>
                    )}
                
            </div>
            </div>
            
        </div>
    )
}