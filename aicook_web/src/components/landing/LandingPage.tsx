export default function LandingPage() {
    return (
        <div className="flex flex-row items-center justify-center h-screen w-full bg-[#E8E4D9]">
            <div className="flex flex-col items-center font-lato tracking-wider text-6xl justify-start w-1/5 text-wrap text-black ml-20">    
            DISCOVER
            HOW
            AI.COOK IS
            CHANGING
            KITCHENS,
            ONE SMART
            RECIPE AT A
            TIME.
            </div>
            <div className="flex flex-row items-center justify-end space-x-30 p-4 w-full mr-20">
                <img src="/mockups/first.png" alt="First Screen" className="w-sm h-sm" />
                <img src="/mockups/signup.png" alt="Signup Screen" className="w-sm h-sm" />
            </div>
        </div>
        
    )
}