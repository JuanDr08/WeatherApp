import { FaWind } from "react-icons/fa"
import { LuCloudRainWind } from "react-icons/lu";
import { MdOutlineWaves } from "react-icons/md";
import { TbSunHigh } from "react-icons/tb";

export const WheatherCurrentStats = {

    SPEED: 'Wind Speed',
    RAINCHANCE: 'Rain Chance',
    PRESSURE: 'Pressure',
    UVINDEX: 'UV Index',

} as const

export const WeatherCurrentStatsExtraInfo = {
    [WheatherCurrentStats.SPEED]: {
        title: 'Wind Speed',
        icon: <FaWind />
    },
    [WheatherCurrentStats.RAINCHANCE]: {
        title: 'Rain Chance',
        icon: <LuCloudRainWind />
    },
    [WheatherCurrentStats.PRESSURE]: {
        title: 'Pressure',
        icon: <MdOutlineWaves />
    },
    [WheatherCurrentStats.UVINDEX]: {
        title: 'UV Index',
        icon: <TbSunHigh />
    },
} as const