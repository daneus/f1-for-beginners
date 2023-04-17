'use client'

import Image from 'next/image'
import raceTrack from '../../public/images/track.png'
import raceCar from '../../public/images/car.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import SprintComponent from '../SprintSection/SprintComponent'

import quali1 from '../../public/images/quali1.jpg'
import quali2 from '../../public/images/quali2.jpg'
import quali3 from '../../public/images/quali3.jpg'
import quali4 from '../../public/images/quali4.jpg'
import quali5 from '../../public/images/quali5.jpg'
import quali6 from '../../public/images/quali6.jpg'
import quali7 from '../../public/images/quali7.webp'

gsap.registerPlugin(ScrollTrigger)

const QualifyingComponent: React.FC = () => {
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    const element = trackRef.current
    const wrapperElement = document.querySelector('#wrapper')
    const breakpoint = document.querySelector('.breakpoint')
    const container = document.querySelector('.trackSpace')

    const q3Cars = document.querySelectorAll('.q3')
    const q3Breakpoint = document.querySelector('.q3-breakpoint')
    const q3SafeCars = document.querySelectorAll('.q3safe')
    const q3SafeBreakpoint = document.querySelector('.q3-safe-breakpoint')

    const q2Cars = document.querySelectorAll('.q2')
    const q2Breakpoint = document.querySelector('.q2-breakpoint')

    const q1Breakpoint = document.querySelector('.q1-breakpoint')

    const timeline = gsap.timeline()

    const ctx = gsap.context(() => {
      gsap.to(element, {
        scrollTrigger: {
          scroller: wrapperElement,
          endTrigger: container,
          trigger: element,
          start: 'bottom bottom',
          end: 'top top',
          pin: true,
          pinSpacing: false,
          scrub: false
        }
      })
      ScrollTrigger.create({
        scroller: wrapperElement,
        trigger: breakpoint,
        onEnter: () => {
          wrapperElement.classList.add('perspective-remover')
        },
        onLeaveBack: () => {
          wrapperElement.classList.remove('perspective-remover')
        }
      })
      timeline
        .from(q3SafeCars, {
          y: '0%'
        })
        .to(q3Cars, {
          x: '-265%',
          scrollTrigger: {
            scroller: wrapperElement,
            trigger: q3Breakpoint,
            start: 'top bottom',
            end: 'top top',
            scrub: 0
          },
          stagger: {
            each: 0.1,
            from: 4
          }
        })
        .to(q3SafeCars, {
          y: '150%',
          scrollTrigger: {
            scroller: wrapperElement,
            trigger: q3SafeBreakpoint,
            start: 'top bottom',
            end: 'top top',
            scrub: 0
          }
        })
        .to(q2Cars, {
          x: '-265%',
          scrollTrigger: {
            scroller: wrapperElement,
            trigger: q2Breakpoint,
            start: 'top bottom',
            end: 'top top',
            scrub: 0
          },
          stagger: {
            each: 0.1,
            from: 4
          }
        })
        .fromTo(
          q3SafeCars,
          { y: '150%' },
          {
            y: '330%',
            scrollTrigger: {
              scroller: wrapperElement,
              trigger: q1Breakpoint,
              start: 'top bottom',
              end: 'top top',
              scrub: 0
            }
          }
        )
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className="w-[100vw] text-right text-[3.1vmax] font-f1bold text-white important py-[5vmax] pr-[3vmax]">
        Qualifying session
      </div>
      <div className="w-[100vw] h-[100vh] relative bg-black">
        <div
          ref={trackRef}
          className="absolute h-[100vh] aspect-[360/1900] z-[10]"
        >
          <Image src={raceTrack} alt="Racing track" fill={true}></Image>
          <div className="q2safe q3safe q1 w-[6vh] h-[6vh] absolute bottom-[85%] left-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe w-[6vh] h-[6vh] absolute bottom-[81%] right-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe w-[6vh] h-[6vh] absolute bottom-[77%] left-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe w-[6vh] h-[6vh] absolute bottom-[73%] right-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe w-[6vh] h-[6vh] absolute bottom-[69%] left-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe w-[6vh] h-[6vh] absolute bottom-[65%] right-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe w-[6vh] h-[6vh] absolute bottom-[61%] left-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe w-[6vh] h-[6vh] absolute bottom-[57%] right-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe w-[6vh] h-[6vh] absolute bottom-[53%] left-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe w-[6vh] h-[6vh] absolute bottom-[49%] right-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe q2 w-[6vh] h-[6vh] absolute bottom-[45%] left-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe q2 w-[6vh] h-[6vh] absolute bottom-[41%] right-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe q2 w-[6vh] h-[6vh] absolute bottom-[37%] left-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe q2 w-[6vh] h-[6vh] absolute bottom-[33%] right-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3safe q2 w-[6vh] h-[6vh] absolute bottom-[29%] left-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3 w-[6vh] h-[6vh] absolute bottom-[25%] right-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3 w-[6vh] h-[6vh] absolute bottom-[21%] left-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3 w-[6vh] h-[6vh] absolute bottom-[17%] right-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3 w-[6vh] h-[6vh] absolute bottom-[13%] left-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
          <div className="q3 w-[6vh] h-[6vh] absolute bottom-[9%] right-[10%]">
            <Image
              src={raceCar}
              alt="Racing car"
              fill={true}
              className="z-10"
            />
          </div>
        </div>
        <div className="">
          <div className="flex items-center text-white h-[100vh] width-[100vw]">
            <div className="h-[100vh] aspect-[360/1900]"></div>
            <div className="h-[100vh] flex grow justify-center items-center relative">
              <div className="absolute w-full h-full bg-dim z-[1]"></div>
              <div className="absolute w-full h-full right">
                <Image
                  src={quali1}
                  alt=""
                  fill={true}
                  className="object-cover"
                ></Image>
              </div>
              <div className="text-[2.2vmax] font-f1regular text-center px-[2.5vmax] z-[10]">
                In <span className="font-f1bold">Q1</span>, the drivers have{' '}
                <span className="font-f1bold good">18 minutes</span> to set
                their fastest lap times.
              </div>
            </div>
          </div>
          <div className="flex items-center text-white h-[100vh] width-[100vw]">
            <div className="h-[100vh] aspect-[360/1900]"></div>
            <div className="q3-breakpoint h-[100vh] w-auto grow flex justify-center items-center">
              <div className="absolute w-full h-full bg-dim z-[1]"></div>
              <div className="absolute w-full h-full right">
                <Image
                  src={quali2}
                  alt=""
                  fill={true}
                  className="object-cover"
                ></Image>
              </div>
              <div className="text-[2.2vmax] font-f1regular text-center px-[2.5vmax] z-[10]">
                The slowest five drivers are{' '}
                <span className="font-f1bold text-white important">
                  eliminated
                </span>{' '}
                and are placed at the bottom of the grid according to their lap
                times.
              </div>
            </div>
          </div>
          <div className="flex items-center text-white h-[100vh] width-[100vw]">
            <div className="h-[100vh] aspect-[360/1900]"></div>
            <div className="q3-safe-breakpoint h-[100vh] w-auto grow flex justify-center items-center">
              <div className="absolute w-full h-full bg-dim z-[1]"></div>
              <div className="absolute w-full h-full right">
                <Image
                  src={quali3}
                  alt=""
                  fill={true}
                  className="object-cover"
                ></Image>
              </div>
              <div className="text-[2.2vmax] font-f1regular text-center px-[2.5vmax] z-[10]">
                In <span className="font-f1bold">Q2</span>, the remaining 15
                drivers have{' '}
                <span className="font-f1bold text-white medium">
                  15 minutes
                </span>{' '}
                to set their lap times.
              </div>
            </div>
          </div>
          <div className="flex items-center text-white h-[100vh] width-[100vw]">
            <div className="h-[100vh] aspect-[360/1900]"></div>
            <div className="q2-breakpoint h-[100vh] w-auto grow flex justify-center items-center">
              <div className="absolute w-full h-full bg-dim z-[1]"></div>
              <div className="absolute w-full h-full right">
                <Image
                  src={quali4}
                  alt=""
                  fill={true}
                  className="object-cover"
                ></Image>
              </div>
              <div className="text-[2.2vmax] font-f1regular text-center px-[2.5vmax] z-[10]">
                Again, the slowest five drivers are{' '}
                <span className="font-f1bold text-white important">
                  eliminated
                </span>{' '}
                and are placed at the middle of the grid according to their lap
                times.
              </div>
            </div>
          </div>
          <div className="flex items-center text-white h-[100vh] width-[100vw]">
            <div className="h-[100vh] aspect-[360/1900]"></div>
            <div className="q1-breakpoint h-[100vh] w-auto grow flex justify-center items-center">
              <div className="absolute w-full h-full bg-dim z-[1]"></div>
              <div className="absolute w-full h-full right">
                <Image
                  src={quali5}
                  alt=""
                  fill={true}
                  className="object-cover"
                ></Image>
              </div>
              <div className="text-[2.2vmax] font-f1regular text-center px-[2.5vmax] z-[10]">
                In <span className="font-f1bold">Q3</span>, the remaining 10
                drivers have{' '}
                <span className="font-f1bold text-white warning">
                  12 minutes
                </span>{' '}
                to set their lap times.
              </div>
            </div>
          </div>
          <div className="flex items-center text-white h-[100vh] width-[100vw]">
            <div className="h-[100vh] aspect-[360/1900]"></div>
            <div className="h-[100vh] w-auto grow flex justify-center items-center">
              <div className="absolute w-full h-full bg-dim z-[1]"></div>
              <div className="absolute w-full h-full right">
                <Image
                  src={quali6}
                  alt=""
                  fill={true}
                  className="object-cover"
                ></Image>
              </div>
              <div className="text-[2.2vmax] font-f1regular text-center px-[2.5vmax] z-[10]">
                In this fierce battle there are no eliminations, the drivers are
                positioned on the grid according to their lap times.
              </div>
            </div>
          </div>
          <div className="flex items-center text-white h-[100vh] width-[100vw]">
            <div className="h-[100vh] aspect-[360/1900]"></div>
            <div className="trackSpace h-[100vh] w-auto grow flex justify-center items-center">
              <div className="absolute w-full h-full bg-dim z-[1]"></div>
              <div className="absolute w-full h-full right">
                <Image
                  src={quali7}
                  alt=""
                  fill={true}
                  className="object-cover"
                ></Image>
              </div>
              <div className="text-[2.2vmax] font-f1regular text-center px-[2.5vmax] z-[10]">
                The fastest driver in <span className="font-f1bold">Q3</span>{' '}
                gets{' '}
                <span className="font-f1bold important">pole position</span> and
                starts the sprint or race at the front of the grid.
              </div>
            </div>
          </div>
          <SprintComponent />
        </div>
      </div>
    </>
  )
}

export default QualifyingComponent
