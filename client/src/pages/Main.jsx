import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../store/APIReducer'
import { useEffect } from 'react'
import { Grid, Card, CardMedia, CardHeader } from "@mui/material";
import { Link } from "react-router";

export default function Main() {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovies({ limit: 10 }))
    }, [])

    let movies = useSelector((state) => state.api.movies)

    return <Grid container spacing={2} sx={{ p: 2 }}>
        {movies.map((movie, index) => (
            
            < Grid key={index} size={{xs: 12, sm:6, md: 4}}>
                <Link to={"/movie/" + movie.id} style={{textDecoration: "none"}}>
                <Card>
                    <CardMedia component="img" image={"http://localhost:3000/" + movie.poster_url}/>
                    <CardHeader title={movie.title} subheader={movie.genre}/>
                </Card>
                </Link>
            </Grid>
            
        ))}
    </Grid>;

}
