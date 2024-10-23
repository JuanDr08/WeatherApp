import { useLoaderData } from "react-router-dom"
import { DinamicHeader } from "../components/DinamicHeader"
import { Welcome } from "../types/TodayApiRes"
import { WeatherStats } from "../components/WeatherStats"
import { FaWind } from "react-icons/fa"
import { LuCloudRainWind } from "react-icons/lu";
import { MdOutlineWaves } from "react-icons/md";
import { TbSunHigh } from "react-icons/tb";

export const CurrentWeatherStatsLoader = async () : Promise<Welcome | null> => {

    const Hour = new Date().getHours()

    try {
        const current = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=981a1304571d4852989130948242110&q=Bucaramanga&hour=${Hour}`, {cache: 'force-cache'})
        const dailyForecast = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=981a1304571d4852989130948242110&q=Bucaramanga`, {cache: 'force-cache'})

        const dailyForecastData : Welcome = await dailyForecast.json()
        const data : Welcome = await current.json()

        dailyForecastData.currentData = data.forecast.forecastday[0]

        console.log(data, 'dayly' , dailyForecastData)

        return dailyForecastData

    } catch (error) {
        console.log(error)
        return null
    }

}

export default function Home() : JSX.Element {

    const data = useLoaderData() as  Welcome | null
    const currentData = data?.currentData
    

    return (

        <>
        
            {currentData ? 
            <>
                <DinamicHeader/>

                <main>
                    <section className="flex flex-wrap justify-center items-center gap-[20px]">
                        <WeatherStats title='Wind Speed' icon={<FaWind className="bg-blanco rounded-full w-[30px] h-[30px] p-[7px]" />} value={currentData?.hour[0].wind_kph} unit='km/h' increment={false} incrementValue='2'/>
                        <WeatherStats title='Rain Chance' icon={<LuCloudRainWind className="bg-blanco rounded-full w-[30px] h-[30px] p-[7px]" />} value={currentData?.hour[0].chance_of_rain ? currentData?.hour[0].chance_of_rain : 0 } unit='%' increment={true} incrementValue='10'/>
                        <WeatherStats title='Pressure' icon={<MdOutlineWaves className="bg-blanco rounded-full w-[30px] h-[30px] p-[7px]" />} value={currentData?.hour[0].pressure_mb} unit='hpa' increment={true} incrementValue='32'/>
                        <WeatherStats title='UV Index' icon={<TbSunHigh className="bg-blanco rounded-full w-[30px] h-[30px] p-[7px]" />} value={currentData?.hour[0].uv} unit='' increment={false} incrementValue='0.3'/>
                    </section>
                </main>
            </> : 
                <h1> Loading...</h1>
            }
        
        </>

    )

}