import React from "react"
import { WeatherStats as Props } from "../types/TodayApiRes"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

export const WeatherStats : React.FC<Props> = ({title, icon, value, unit, increment, incrementValue}) => {
    return (
        
        <div className="flex justify-between items-center w-[170px] h-[150px] bg-lilaP">
            {icon}
            <section className="flex flex-col gap-[5px]">
                <p>{title}</p>
                <p>{value}{unit}</p>
            </section>
            <section className="flex gap-[3px]">
                {increment ? <IoMdArrowDropdown className="fill-red-500"/> : <IoMdArrowDropup className="fill-morado"/> }
                <p>{incrementValue}</p>
            </section>
        </div>

    )
}