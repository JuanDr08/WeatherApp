import React from "react"
import { WeatherStats as Props } from "../types/TodayApiRes"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

export const WeatherStats : React.FC<Props> = ({title, icon, value, unit, increment, incrementValue}) => {
    return (
        
        <div className="flex justify-between items-center w-[190px] h-[70px] bg-lilaP/30 rounded-xl p-[5px]">
            {icon}
            <section className="flex flex-col gap-[3px]">
                <p className="text-sm">{title}</p>
                <p>{value}{unit}</p>
            </section>
            <section className="flex gap-[3px] self-end">
                {increment ? <IoMdArrowDropdown className="fill-red-500"/> : <IoMdArrowDropup className="fill-morado"/> }
                <p><small>{incrementValue}{unit}</small></p>
            </section>
        </div>

    )
}