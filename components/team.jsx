export default function Team(){
    return (
        <>
        <div class="bg-gray-900 py-24 sm:py-32">
            <div className="border-b-2 border-purple-500  translate-x-1/4 rounded-3xl w-1/4 mb-8"></div>
        <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div class="max-w-2xl">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our leadership</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
            </div>
            <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                {
                    [...Array(4)].map((_, i) => (
                    <li key={i} >
                        <div class="flex items-center gap-x-6">
                        <img class="h-16 w-16 rounded-full object-cover" src="https://www.animesoulking.com/wp-content/uploads/2021/01/mikasa-attack-on-titan.jpg" alt=""/>
                        <div>
                            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-100">Mikasa Akerman</h3>
                            <p class="text-sm font-semibold leading-6 text-indigo-600 opacity-70">Co-Founder / CEO</p>
                        </div>
                        </div>
                    </li>
                    ))
                }
            

            </ul>
        </div>
        </div>
        </>
    )
}