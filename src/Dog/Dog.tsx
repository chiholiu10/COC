import { FC, useState } from "react";
import { DogData } from "../Data/Data";
import { DogButton, DogComponent, DogContent, DogImage, DogNoResult, DogOption, DogResult, DogSelect, DogSelectComponent } from "./Dog.styles";

export const Dog: FC = () => {
    const [dogBreed, setDogBreed] = useState<string>("");
    const [showDog, setShowDog] = useState<any>("");
    const [currentStatus, setCurrentStatus] = useState<boolean>(false);
    const [preload, setPreload] = useState<boolean>(false);

    const fetchApi = async (dogType: string) => {
        try {
            const getDog = await fetch(`https://dog.ceo/api/breed/${dogType}/images/random`);
            const currentJson = await getDog.json();
            setCurrentStatus(getDog.ok)
            setPreload(true);
            setShowDog(currentJson.message);
        }
        catch (err) {
            console.error(err)
        }
    }

    const checkValue = () => fetchApi(dogBreed);
    const callDogApi = (dogType: string) => {
        const convertLowerCase = dogType.toLowerCase();
        setDogBreed(convertLowerCase);
    }

    return (
        <DogComponent>
            <DogSelectComponent>
                <DogSelect name="dogs" id="dog-select" data-testid="select" onChange={(e: any) => callDogApi(e.target.value)} >
                    {DogData.map((item) => (
                        <DogOption key={item.id} value={item.name} data-testid="select-option">{item.name}</DogOption>
                    ))}
                </DogSelect>
                <DogButton onClick={checkValue}>Zoeken</DogButton>
            </DogSelectComponent>

            <DogResult>
                {preload ? (currentStatus ? <DogContent><DogImage src={showDog} alt={"image-dog"} /></DogContent> : <DogNoResult>No Result</DogNoResult>) : <></>}
            </DogResult>
        </DogComponent>

    )
}