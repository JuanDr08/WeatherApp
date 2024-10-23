import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";

export const DinamicHeader = (): JSX.Element => {
    const [, setScrollY] = useState(0);
    const [divHeight, setDivHeight] = useState(450);

    useEffect(() => {
        const handleScroll = (): void => {
            const scrollPosition = window.scrollY;


            setScrollY(scrollPosition);


            if (scrollPosition >= 0 && scrollPosition <= 450) {

                const newHeight = 450 - ((scrollPosition / 450) * 225);
                setDivHeight(newHeight);
            } else if (scrollPosition > 450) {
                setDivHeight(225);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`sticky top-0 w-full transition ease-in-out ${divHeight <= 250 ? 'bg-lilaV' : ''}`}
            style={{ height: `${divHeight}px` }}
        >

            <div className="w-full h-full relative" >

                <div className="relative h-[85%] w-full rounded-b-3xl">
                    {divHeight >= 250 && <img className="absolute z-[-1] h-full w-full object-cover object-bottom rounded-b-3xl" src="/storage/img/headerimg.png" alt="foto" />}
                    <div className="h-full flex flex-col px-[30px] justify-around">
                        <section className="flex justify-between items-center">
                            <p><strong className={` transition ease-in-out ${divHeight >= 250 ? 'text-blanco' : 'text-black'} text-xl`}>Kharkiv, Ukraine</strong></p>
                            <IoMdSearch className={`${divHeight >= 250 ? 'fill-white' : 'fill-black'} text-2xl`} />
                        </section>
                        <section className="flex justify-between items-center">
                            <div className="flex items-center">
                                <p className={` transition ease-in-out ${divHeight >= 250 ? 'text-blanco text-8xl' : 'text-black text-6xl'} `}>3°</p>
                                <p className={` transition ease-in-out ${divHeight >= 250 ? 'text-blanco' : 'text-black'} self-end ml-[-20px] text-lg`}>Feels like -2°</p>
                            </div>
                            <div className="flex flex-col items-center gap-[15px]">
                                <svg width={` transition ease-in-out ${divHeight >= 250 ? '81' : '61'}`} height={`${divHeight >= 250 ? '107' : '87'}`} viewBox="0 0 81 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.5 80.25C62.6604 80.25 80.625 62.2854 80.625 40.125C80.625 17.9646 62.6604 0 40.5 0C18.3396 0 0.375 17.9646 0.375 40.125C0.375 62.2854 18.3396 80.25 40.5 80.25Z" fill="#FBBC04" />
                                    <path d="M40.5 80.25C62.6604 80.25 80.625 62.2854 80.625 40.125C80.625 17.9646 62.6604 0 40.5 0C18.3396 0 0.375 17.9646 0.375 40.125C0.375 62.2854 18.3396 80.25 40.5 80.25Z" fill="url(#paint0_linear_1_811)" />
                                    <path d="M50.5312 107C67.1516 107 80.625 93.5266 80.625 76.9062C80.625 60.2859 67.1516 46.8125 50.5312 46.8125C33.9109 46.8125 20.4375 60.2859 20.4375 76.9062C20.4375 93.5266 33.9109 107 50.5312 107Z" fill="url(#paint1_linear_1_811)" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.5044 74.9201C20.9168 68.6713 23.2684 62.7068 27.2314 57.8579C31.1945 53.009 36.5715 49.5172 42.6131 47.8692C48.6547 46.2211 55.06 46.4989 60.9363 48.6638C66.8125 50.8288 71.867 54.7729 75.3954 59.9467C71.8931 66.1138 66.8183 71.2419 60.6882 74.8086C54.5582 78.3752 47.5921 80.2528 40.5 80.25C33.2173 80.25 26.3894 78.3106 20.5044 74.9201Z" fill="url(#paint2_linear_1_811)" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M50.5312 107C50.5312 100.349 47.8891 93.9701 43.186 89.2671C38.483 84.564 32.1043 81.9219 25.4531 81.9219C18.802 81.9219 12.4233 84.564 7.72021 89.2671C3.01715 93.9701 0.375 100.349 0.375 107C0.411781 106.943 50.5446 106.96 50.5312 107Z" fill="#F1F3F4" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1_811" x1="0.375" y1="0" x2="54.8318" y2="61.0149" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FCD35C" />
                                            <stop offset="1" stopColor="#FBBC04" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_1_811" x1="33.9755" y1="57.2821" x2="80.625" y2="116.15" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#F1F3F4" />
                                            <stop offset="1" stopColor="#DEDFDF" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_1_811" x1="66.3153" y1="80.25" x2="40.0305" y2="23.8041" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#E4E5E5" />
                                            <stop offset="1" stopColor="#FCD35C" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {divHeight >= 250 && <p className="text-blanco text-xl font-bold">Cloudy</p>}

                            </div>
                        </section>
                        {
                            divHeight >= 250 &&
                            <section className="flex justify-between items-center">
                                <div className="text-blanco">January 18, 16:14</div>
                                <div>
                                    <p className="text-blanco">Day 3°</p>
                                    <p className="text-blanco">Night -1°</p>
                                </div>
                            </section>
                        }
                    </div>
                    <div className="flex justify-center gap-[20px] items-center h-[15%]">
                        <button className="bg-lilaHV px-[15px] py-[8px] rounded-xl w-[120px]">Today</button>
                        <button className="bg-blanco px-[15px] py-[8px] rounded-xl w-[120px]">Tomorrow</button>
                        <button className="bg-blanco px-[15px] py-[8px] rounded-xl w-[120px]">10 days</button>
                    </div>
                </div>


            </div>
        </div>
    );
};