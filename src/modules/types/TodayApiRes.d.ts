import { ReactElement } from "react";
import { WheatherCurrentStats } from "../consts";

export interface Welcome {
    readonly location: Location;
    readonly current:  Current;
    readonly forecast: Forecast;
    currentData?: Forecastday
}

export interface Current {
    readonly last_updated_epoch?: number;
    readonly last_updated?:       string;
    readonly temp_c:              number;
    readonly temp_f:              number;
    readonly is_day:              number;
    readonly condition:           Condition;
    readonly wind_mph:            number;
    readonly wind_kph:            number;
    readonly wind_degree:         number;
    readonly wind_dir:            WindDir;
    readonly pressure_mb:         number;
    readonly pressure_in:         number;
    readonly precip_mm:           number;
    readonly precip_in:           number;
    readonly humidity:            number;
    readonly cloud:               number;
    readonly feelslike_c:         number;
    readonly feelslike_f:         number;
    readonly windchill_c:         number;
    readonly windchill_f:         number;
    readonly heatindex_c:         number;
    readonly heatindex_f:         number;
    readonly dewpoint_c:          number;
    readonly dewpoint_f:          number;
    readonly vis_km:              number;
    readonly vis_miles:           number;
    readonly uv:                  number;
    readonly gust_mph:            number;
    readonly gust_kph:            number;
    readonly time_epoch?:         number;
    readonly time?:               string;
    readonly snow_cm?:            number;
    readonly will_it_rain?:       number;
    readonly chance_of_rain?:     number;
    readonly will_it_snow?:       number;
    readonly chance_of_snow?:     number;
}

export interface Condition {
    readonly text: string;
    readonly icon: string;
    readonly code: number;
}

export enum WindDir {
    Ssw = "SSW",
    Sw = "SW",
    Wsw = "WSW",
}

export interface Forecast {
    readonly forecastday: Forecastday[];
}

export interface Forecastday {
    readonly date:       Date;
    readonly date_epoch: number;
    readonly day:        Day;
    readonly astro:      Astro;
    readonly hour:       Current[];
}

export interface Astro {
    readonly sunrise:           string;
    readonly sunset:            string;
    readonly moonrise:          string;
    readonly moonset:           string;
    readonly moon_phase:        string;
    readonly moon_illumination: number;
    readonly is_moon_up:        number;
    readonly is_sun_up:         number;
}

export interface Day {
    readonly maxtemp_c:            number;
    readonly maxtemp_f:            number;
    readonly mintemp_c:            number;
    readonly mintemp_f:            number;
    readonly avgtemp_c:            number;
    readonly avgtemp_f:            number;
    readonly maxwind_mph:          number;
    readonly maxwind_kph:          number;
    readonly totalprecip_mm:       number;
    readonly totalprecip_in:       number;
    readonly totalsnow_cm:         number;
    readonly avgvis_km:            number;
    readonly avgvis_miles:         number;
    readonly avghumidity:          number;
    readonly daily_will_it_rain:   number;
    readonly daily_chance_of_rain: number;
    readonly daily_will_it_snow:   number;
    readonly daily_chance_of_snow: number;
    readonly condition:            Condition;
    readonly uv:                   number;
}

export interface Location {
    readonly name:            string;
    readonly region:          string;
    readonly country:         string;
    readonly lat:             number;
    readonly lon:             number;
    readonly tz_id:           string;
    readonly localtime_epoch: number;
    readonly localtime:       string;
}

export interface WeatherStats { 

    title: typeof WheatherCurrentStats[keyof typeof WheatherCurrentStats]
    icon: ReactElement
    value: number
    unit: string
    increment: boolean
    incrementValue: string

}