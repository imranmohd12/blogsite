import { forwardRef, useId } from "react"

const Select = ({
    options,
    label,
    className='',
    ...props
},ref)=>{
    const id = useId();
    return (
        <div>
            {label
            &&
            <label htmlFor={id} className=""></label>
            }
            <select
            id={id}
            className={`px-3 py-2 rouded-lg bg-white text-black focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            {...props}
            >
                {options?.map((item)=>{
                    <option key={item} value={item}>
                        {item}
                    </option>
                })}
            </select>
        </div>
    )
    
}

export default forwardRef(Select);