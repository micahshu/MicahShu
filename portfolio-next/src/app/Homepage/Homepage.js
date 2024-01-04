import React, { useRef, useEffect } from 'react';

export default function HomePage() {
    const sectionRefs = useRef([]);

  useEffect(() => {
    const handleWheel = (e, sectionIndex) => {
      const section = sectionRefs.current[sectionIndex];
      const wheelDelta = e.deltaY || e.detail || e.wheelDelta;

      if (section) {
        const { scrollLeft, scrollWidth, clientWidth } = section;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (sectionIndex === 0 && wheelDelta < 0 && scrollLeft === 0) {
          // Scrolling left at the start of first section, allow default behavior
          return;
        }

        if (
          (wheelDelta < 0 && scrollLeft === 0) || // Scrolling left at the start
          (wheelDelta > 0 && scrollLeft === maxScrollLeft) // Scrolling right at the end
        ) {
          const nextSectionIndex = wheelDelta < 0 ? sectionIndex - 1 : sectionIndex + 1;
          const targetSection = sectionRefs.current[nextSectionIndex];
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            e.preventDefault();
          }
        } else {
          section.scrollLeft += wheelDelta;
          e.preventDefault();
        }
      }
    };

    sectionRefs.current.forEach((section, index) => {
      section.addEventListener('wheel', (e) => handleWheel(e, index), {
        passive: false,
      });
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        section.removeEventListener('wheel', handleWheel);
      });
    };
  }, []);

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen w-screen">
      

      <section
        ref={(ref) => (sectionRefs.current[0] = ref)}
        className="h-screen flex bg-black snap-start pt-16 border-b-2 border-solid border-pastelGreen overflow-x-scroll"
      >
        <div className="flex">
          
          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 1</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 1</h1></div>
          </div>

          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 1</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 2</h1></div>
          </div>

          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 1</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 3</h1></div>
          </div>
          
          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 1</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 4</h1></div>
          </div>
          
          
        </div>
      </section>

      <section
        ref={(ref) => (sectionRefs.current[1] = ref)}
        className="h-screen flex bg-black snap-start pt-16 border-b-2 border-solid border-pastelGreen overflow-x-scroll"
      >
        <div className="flex">
          
          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 2</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 1</h1></div>
          </div>

          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 2</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 2</h1></div>
          </div>

          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 2</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 3</h1></div>
          </div>
          
          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 2</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 4</h1></div>
          </div>
          
          
        </div>
      </section>

      <section
        ref={(ref) => (sectionRefs.current[2] = ref)}
        className="h-screen flex bg-black snap-start pt-16 border-b-2 border-solid border-pastelGreen overflow-x-scroll"
      >
        <div className="flex">
          
          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 3</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 1</h1></div>
          </div>

          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 3</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 2</h1></div>
          </div>

          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 3</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 3</h1></div>
          </div>
          
          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 3</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 4</h1></div>
          </div>
          
          
        </div>
      </section>

      <section
        ref={(ref) => (sectionRefs.current[3] = ref)}
        className="h-screen flex bg-black snap-start pt-16 border-b-2 border-solid border-pastelGreen overflow-x-scroll"
      >
        <div className="flex">
          
          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 4</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 1</h1></div>
          </div>

          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 4</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 2</h1></div>
          </div>

          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 4</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 3</h1></div>
          </div>
          
          <div className="flex-shrink-0 flex-grow-0 w-screen h-full text-center ">
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Section 4</h1></div>
            <div className=''><h1 className=' font-bold text-9xl w-1/2 m-auto'>Item 4</h1></div>
          </div>
          
          
        </div>
      </section>
    </div>
  );
}
