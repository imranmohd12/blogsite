import {useId,ForwardedRef} from 'react';

const Input =  ForwardedRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
},ref){

    return (
        <div className='w-full'>
            {
                label 
                && 
                <label
                className='inline-block mb-1 pl-1'
                htmlFor={useId()}
                >{label}</label>
            }
            <input 
            type={type}
            className={`${className}`}
            ref={ref}
            {...props}
            />
        </div>
    )
})