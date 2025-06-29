import React, { useEffect, useState, useContext } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import axios from 'axios'

const url = '/react-tours-project'
export const tourIdContext = React.createContext()

function AllTours() {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    const removeTour = id => {
        setTours(tours.filter(tour => tour.id !== id))
    }

    const fetchData = () => {
        setLoading(true)
        axios.get(url)
            .then(res => {
                setLoading(false)
                setTours(res.data)
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        ) 
    }

    return (
        <main>
            <tourIdContext.Provider value={removeTour}>
                <Tours tours={tours}/>
            </tourIdContext.Provider>
        </main>
    )
}

export default AllTours