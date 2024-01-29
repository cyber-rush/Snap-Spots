import { useParams } from "react-router-dom"
import PlaceList from "../components/PlaceList"

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
const UserPlaces = () => {
    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces
