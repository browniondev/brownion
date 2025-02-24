"use client";

const Pricing = () => {
    
    return (<section className="justify-center items-center w-full lg:px-6 py-4">
      <div className="section-title flex flex-col sm:flex-row gap-8 sm:gap-4 sm:items-center sm:justify-between">
        <h1 className="font-bold text-2xl tracking-wide font-sans">PRICING <span className="font-serif font-semibold text-sm">@ brown.ion</span><br /><small className="font-sans text-xs text-gray-700 font-medium">That blows your customers mind 🤯, and makes your brand go 🪄</small></h1>
        <ul className="flex gap-3 sm:gap-6 w-80 scrollbar-hide sm:w-auto overflow-x-scroll">
            <li className="px-5 cursor-pointer py-3 rounded-full border border-gray-200 text-xs uppercase transition-all duration-500 ease-in hover:bg-gray-950 hover:text-gray-100">Cafe</li>
            <li className="px-5 cursor-pointer py-3 rounded-full border border-gray-200 text-xs uppercase">Restaurants</li>
            <li className="px-5 cursor-pointer py-3 rounded-full border border-gray-200 text-xs uppercase">Corporates</li>
        </ul>
      </div>
        <section className="grid grid-cols-1 sm:grid-cols-8 gap-6 mt-10">
            <div className="col-span-2">
            <div
  className="relative w-full border-animation flex justify-center items-center h-12 rounded-full transition-all duration-100 ease-in border-wrapper-unactive"
>
  <div
    className="bg-white flex items-center px-2 w-[calc(100%-4px)] rounded-full h-[calc(100%-4px)] z-10"
    onClick={(e) => {
      // Get the parent div of the clicked child
      const parentDiv = e.currentTarget.parentElement;
      console.log(e.currentTarget)

      if (parentDiv) {
        // Check if "border-wrapper" exists
        console.log(parentDiv)
        if (parentDiv.classList.contains("border-wrapper")) {
          parentDiv.classList.remove("border-wrapper");
          parentDiv.classList.add("border-wrapper-unactive");
        } else {
          parentDiv.classList.add("border-wrapper");
          parentDiv.classList.remove("border-wrapper-unactive");
        }
      }
    }}
  >
    Instagram + Facebook
  </div>
</div>

            </div>
            <div className="col-span-6 rounded-md p-4">
                    {/* <div className="pricing-plan-title flex justify-center gap-6 w-full">
                        <h2 className="px-5 py-3 bg-gray-950 rounded-xl text-sm text-white">Growth @ brown.ion</h2>
                        <h2 className="px-5 py-3 rounded-xl text-sm">Boost @ brown.ion</h2>
                    </div> */}

                    <div className="pricing-plan-description text-sm my-4 font-mono">
                        Growth plan is best suited for businesses looking to make their way to establish themeselves in the digital market.
                    </div>

                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 font-sans">
    <div className="bg-white/60 p-8 sm:p-10 lg:mx-0">
      <h3 id="tier-hobby" className="text-base/7 font-semibold">Hobby</h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-5xl font-semibold tracking-tight text-foreground">$29</span>
        <span className="text-base text-gray-500">/month</span>
      </p>
      <p className="mt-6 text-base/7 text-gray-600">The perfect plan if you&#039;re just getting started with our product.</p>
      <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          25 products
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Up to 10,000 subscribers
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Advanced analytics
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          24-hour support response time
        </li>
      </ul>
      <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold ring-1 ring-gray-200 ring-inset hover:ring-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-10">Get started today</a>
    </div>
    <div className="relative p-8 sm:p-10">
    <div className="absolute pricing-special-tier top-0 left-0 w-full h-full"></div>
      <h3 id="tier-enterprise" className="text-base/7 font-semibold text-foreground">Enterprise</h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-5xl font-semibold tracking-tight text-foreground">$99</span>
        <span className="text-base text-background">/month</span>
      </p>
      <p className="mt-6 text-base/7 text-gray-300">Dedicated support and infrastructure for your company.</p>
      <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-background" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Unlimited products
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-background" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Unlimited subscribers
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-background" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Advanced analytics
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-background" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Dedicated support representative
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-background" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Marketing automations
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-background" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
          </svg>
          Custom integrations
        </li>
      </ul>
      <a href="#" aria-describedby="tier-enterprise" className="mt-8 block rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 sm:mt-10">Get started today</a>
    </div>
    </div>
            </div>
        </section>
    </section>);
}

export default Pricing;