import { FC, useState } from "react";
import { CatData } from "../Data/Data";
import { CatComponent, CatContent, CatCountryCode, CatDecription, CatFriendly, CatInput, CatLabel, CatListNoResult, CatRadioSelectBlock, CatTemperament, CatWeight } from "./Cat.styles";

export const Cat: FC = () => {
    const [check, setCheck] = useState<number>(0);
    const [data, setData] = useState<any>();
    const [currentStatus, setCurrentStatus] = useState<boolean>(false);
    const [preload, setPreload] = useState<boolean>(false);

    const fetchApi = async (catType: string) => {
        try {
            const getCat = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${catType}`, {
                method: 'GET',
                headers: new Headers({
                    'X-API-KEY': process.env.REACT_APP_API_KEY as string,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }),
            });
            const currentJson = await getCat.json()
            setData(currentJson);
            setCurrentStatus(getCat.ok)
            setPreload(true);
        }
        catch (err) {
            console.error(err)
        }
    }

    const callCatApi = (catType: string, currentIndex: number) => {
        const convertLowerCase = catType.toLowerCase();
        fetchApi(convertLowerCase);
        setCheck(currentIndex);
    }

    return (
        <CatComponent>
            {CatData.map((item, index) => (
                <CatRadioSelectBlock key={index}>
                    <CatLabel htmlFor={item.name}>
                        <CatInput type="radio" id={item.name} name="animal" value={item.name} checked={index === check} onChange={(e) => callCatApi(e.target.value, index)} />
                        {item.name}
                    </CatLabel>
                </CatRadioSelectBlock>
            ))}

            {preload ? (currentStatus ? <CatContent>
                <CatWeight>Weight: {data[0].weight.imperial}</CatWeight>
                <CatFriendly>Child Friendly: {data[0].child_friendly}</CatFriendly>
                <CatCountryCode>Country: {data[0].country_code}</CatCountryCode>
                <CatDecription>Description: {data[0].description}</CatDecription>
                <CatTemperament>Temperament: {data[0].temperament}</CatTemperament>
            </CatContent> : <CatListNoResult>No Result</CatListNoResult>) : <></>}
        </CatComponent>

    )
}