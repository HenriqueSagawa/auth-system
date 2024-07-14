export function Input({ type, placeholder }: any) {
    return (
        <input className="outline-none w-full rounded p-3 bg-slate-700" type={type} placeholder={placeholder} required/>
    )
}