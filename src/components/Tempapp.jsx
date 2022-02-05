import React, { useEffect, useState } from "react";

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("kathmandu");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3479de67c5b917bb32e26ecc70a0f904`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        };

        fetchApi();
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="text" value={search} className="inputField" onChange={(e) => { setSearch(e.target.value) }} />
                </div>
                {!city ? (<p > 👇 No Data Found</p>) : (
                    <div>
                        <div >
                            <h1 > 🖐 {search}</h1>
                            <h1 >{city.temp}°C</h1>
                            <h3 >min : {city.temp_min}°C| max :{city.temp_max}°C </h3>
                        </div>

                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>

                )}

            </div>
        </>
    )
}
export default Tempapp;