import { useParams } from "react-router-dom"
import Input from "../../shared/components/FormElements/Input"
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators"
import Button from "../../shared/components/FormElements/Button"
import './PlaceForm.css'
import { useForm } from "../../shared/hooks/form-hook"
import { useEffect, useState } from "react"
import Card from "../../shared/components/UIElements/Card"

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Emp. State building',
        description: 'One of the most famous sky scrappers in the world!',
        imageUrl: 'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484445,
            long: -73.9882393
        },
        creator: 'u1'
    },

    {
        id: 'p2',
        title: 'Empire State building',
        description: 'One of the most famous sky scrappers in the world!',
        imageUrl: 'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484445,
            long: -73.9882393
        },
        creator: 'u2'
    }
]

const UpdatePlace = () => {
    const [isLoading, setIsLoading] = useState(true)
    const placeId = useParams().placeId

    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
        },
        false
    )

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    useEffect(() => {

        if (identifiedPlace) {
            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                },
            },
                true
            )
        }

        setIsLoading(false)
    }, [setFormData, identifiedPlace])


    const placeUpdateSubmitHandler = (e) => {
        e.preventDefault()
        console.log(formState.inputs)
    }

    if (!identifiedPlace) {
        return (
            <div className="center">
                <Card>
                    <h2>Could not find place!</h2>
                </Card>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="center">
                <h2>Loading...</h2>
            </div>
        )
    }

    return (
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title"
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="description"
                element="textarea"
                type="text"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (min. 5 characters)"
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid} >
                UPDATE PLACE
            </Button>
        </form>
    )
}

export default UpdatePlace
