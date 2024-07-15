export function Form({ children, onSubmit }: any) {
    return (
        <form noValidate onSubmit={onSubmit} className="w-[400px] text-white p-6 shadow z-10 rounded flex flex-col items-center justify-center gap-5 bg-slate-800">
            {children}
        </form>
    )
}