import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import axios from 'axios'

const url = '/react-tours-project'

function AllTours() {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])
    
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
            <Tours tours={tours}/>
        </main>
    )
}

export default AllTours