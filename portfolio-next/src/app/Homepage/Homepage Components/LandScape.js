

export default function LandScape(){

    return (
        <section className="h-screen bg-skyBlue snap-start grid grid-cols-6 grid-rows-6 gap-4">
                  <div className="col-start-1 col-span-3 row-span-2  ">
                    <div className="">
                        <img className="relative top-20" src="cloud.png"/>
                    </div>
                </div>
                    <div className="col-span-3 row-span-4 row-start-3">2</div>
    <div className="col-span-3 row-span-3 col-start-4 row-start-4">3</div>
              </section>
    )
}