import { useState } from "react"
import styles from "./detailsSettings.module.css"
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from "react-redux"
import { addSettings } from "../../../store/detailSlice"

export const DetailsSettings = () => {

    const details = useSelector((store) => store.details)

    const dispatch = useDispatch();

    const [activeList, setActiveList] = useState(false)
    const [textSelected, setTextSelected] = useState('Квадрат')

    const toggleList = () => {
        setActiveList(!activeList)
    }



    const handleText = (e) => {
        const text = e.target.textContent;
        setTextSelected(text)
        setActiveList(!activeList)
    }

    const {
    register,
    formState: {errors, isValid},
    handleSubmit,
    reset,
} = useForm({
    mode: 'onChange'
})

const onSubmit = (data) => {

 if (textSelected === 'Квадрат') {
    dispatch(addSettings({
    type: 'square',
    width: data.side,
    height: data.side,
    quantity: data.quantity,
    sizeOccupied: ((data.side * data.side + 2) * data.quantity)
    }))
 }

 else {
    dispatch(addSettings({
    type: 'rectangle',
    width: data.width,
    height: data.height,
    quantity: data.quantity,
    sizeOccupied: ((data.width + 1) * (data.height + 1) * data.quantity)
    }))
 }

    //reset();
}

    return (
        <div className={styles.container}>
            
                
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formBlock}>
                <p className={styles.title}>Выберите тип детали: </p>
                <div className={styles.dropdown}>
                    <div className={styles.select}  onClick={toggleList}>
                        <span className={styles.selected}>{textSelected}</span>
                        <div className={`${styles.caret} ${activeList ? styles.caretRotate : ''}`}></div>
                    </div>
                    {activeList ? (<ul className={styles.menu}>
                        <li className={`${styles.menuElement} ${styles.elementSquare} ${textSelected === 'Квадрат' ? styles.active : ''}`} onClick={handleText}>Квадрат</li>
                        <li className={`${styles.menuElement} ${styles.elementRectangle} ${textSelected === 'Прямоугольник' ? styles.active : ''}`} onClick={handleText}>Прямоугольник</li>
                    </ul>) : ''}
                
                </div>
            </div>
            {textSelected==="Квадрат" ? (
                <div className={styles.formBlock}>
            
            <p className={styles.title}>Укажите размеры деталей:</p>
            
                <div className={styles.inputBlockQuantity}>
        <label className={styles.labelQuantity}>
            Размер стороны:
            </label>
            <input className={styles.input} {...register('side', {
                required: "Это обязательное поле",
                pattern: {
                    value: /^\d+$/,
                    message: 'Разрешены только цифры'
                }
                
            })}/>
            <label className={styles.label}>
            мм.
            </label>
        
        
        </div>
        <div className={styles.error}>
            {errors?.phone && <p>{errors?.phone?.message || 'Error'}</p>}
        </div>
        
        </div>
            ) : 
            (<div className={styles.formBlock}>
                        <p className={styles.title}>Укажите размеры детали:</p>
                        <div>
                            <div className={styles.inputBlock}>
        <label className={styles.label}>
            Длина:
            </label>
            <input className={styles.input} {...register('width', {
                required: "Это обязательное поле",
                pattern: {
                    value: /^\d+$/,
                    message: 'Разрешены только цифры'
                }
                
            })}/>
            <label className={styles.label}>
            мм.
            </label>
        
        
        </div>
        <div className={styles.error}>
            {errors?.name && <p>{errors?.name?.message || 'Error'}</p>}
        </div>
        <div className={styles.inputBlock}>
        <label className={styles.label}>
            Ширина:
            </label>
            <input className={styles.input} {...register('height', {
                required: "Это обязательное поле",
                pattern: {
                    value: /^\d+$/,
                    message: 'Разрешены только цифры'
                }
                
            })}/>
            <label className={styles.label}>
            мм.
            </label>
        
        
        </div>
        <div className={styles.error}>
            {errors?.surname && <p>{errors?.surname?.message || 'Error'}</p>}
        </div>
        </div>
        </div>)}
                    
        <div className={styles.formBlock}>
            
            <p className={styles.title}>Укажите количество деталей:</p>
            
                <div className={styles.inputBlockQuantity}>
        <label className={styles.labelQuantity}>
            Количество:
            </label>
            <input className={styles.input} {...register('quantity', {
                required: "Это обязательное поле",
                pattern: {
                    value: /^\d+$/,
                    message: 'Разрешены только цифры'
                }
                
            })}/>
            <label className={styles.label}>
            шт.
            </label>
        
        
        </div>
        <div className={styles.error}>
            {errors?.phone && <p>{errors?.phone?.message || 'Error'}</p>}
        </div>
        
        </div>
        <button className={styles.button} disabled={!isValid} type='submit'>
        Добавить на лист
        </button>
    </form>
        </div>
    )
}