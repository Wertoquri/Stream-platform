import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../store/APIReducer'
import { useEffect } from 'react'
import { Grid, Card, CardMedia, CardHeader, Box } from "@mui/material";
import { Link } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';
import SortBar from '../components/SortBar';

export default function Main() {
    let dispatch = useDispatch()
    let { limit, sort, sortType, movies, loading } = useSelector((state) => state.api)

    const baseURL = import.meta.env.DEV ? "http://localhost:3000" : ""
    const buildUrl = (path) => `${baseURL}${path?.startsWith('/') ? path : `/${path}`}`

    useEffect(() => {
        dispatch(getMovies({ limit, sort, sortType }))
    }, [dispatch, limit, sort, sortType])

    if (loading) {
        return <Box sx={{
            minHeight: "50vh",
            display: "grid",
            placeItems: "center"
        }}>
            <CircularProgress />
        </Box>
    }

    return <Grid container spacing={2} sx={{ p: 2 }}>
        <SortBar />
        {movies.map((movie, index) => (
            
            <Grid key={index} size={{xs: 12, sm:6, md: 4}}>
                <Link to={"/movie/" + movie.id} style={{textDecoration: "none"}}>
                <Card>
                    <CardMedia component="img" image={buildUrl(movie.poster_url)} />
                    <CardHeader title={movie.title} subheader={movie.genre}/>
                </Card>
                </Link>
            </Grid>
            
        ))}
    </Grid>;

}
