export function Input({ type, placeholder, register, className }: any) {
    return (
        <input {...register}  className={`outline-none w-full rounded p-3 bg-slate-700 ${className}`} type={type} placeholder={placeholder}/>
    )
}