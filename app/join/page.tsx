export default function Joinus() {
    return (
        <section className="relative flex justify-center items-center">
            <form action="mailto:team@brownion.com" className="border font-sans rounded w-1/2 p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2 mx-auto">
                    <label htmlFor="" className="text-sm font-semibold ">Name: </label>
                    <div className="relative flex rounded-sm bg-gray-100">
                        <div className="bg-gray-950 w-16 rounded-l-sm"></div>

                        <input type="text" name="" id="" className=" bg-transparent focus:outline-none outline-none rounded-sm px-4 py-3 font-serif w-96" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mx-auto">
                    <label htmlFor="">Email: </label>
                    <input type="text" name="" id="" className="bg-gray-100 p-2 w-96" />
                </div>
                <div className="flex flex-col gap-2 mx-auto">
                    <label htmlFor="">Phone: </label>
                    <div className="flex items-center bg-black p-2 w-96 rounded">
                    <input type="text" name="" id="" className="bg-gray-100 p-2 w-96" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mx-auto">
                    <label htmlFor="">Cover Letter: </label>
                    <textarea name="" id="" className="bg-gray-100 p-2 w-96"></textarea>
                </div>
                <input type="file" name="resume" id="" accept="application/pdf,application/x-pdf,application/x-bzpdf,application-gzpdf" />
            </form>
        </section>
    )
}