import React from 'react'
import { Grid, Card, CardContent, FormControl, Select, MenuItem, InputLabel } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { changeLimit, changeSort, changeSortType } from '../store/APIReducer'

export default function SortBar() {
    let dispatch = useDispatch()
    let { limit, sort, sortType } = useSelector((state) => state.api)

    return (
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <Card>
                <CardContent sx={{ display: "flex", gap: 1 }}>
                    <FormControl sx={{ flexGrow: 1 }}>
                        <InputLabel>Sort by</InputLabel>
                        <Select label="Sort" defaultValue={"title"}
                            value={sort} onChange={(e) => dispatch(changeSort(e.target.value))}>
                            <MenuItem value={"title"}>Title</MenuItem>
                            <MenuItem value={"genre"}>Genre</MenuItem>
                            <MenuItem value={"id"}>Add date</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                        <InputLabel>Order</InputLabel>
                        <Select label="Sort order" defaultValue={"ASC"}
                            value={sortType} onChange={(e) => dispatch(changeSortType(e.target.value))}>
                            <MenuItem value={"DESC"}>↓</MenuItem>
                            <MenuItem value={"ASC"}>↑</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                        <InputLabel>Count</InputLabel>
                        <Select label="Count" defaultValue={3}
                            value={limit} onChange={(e) => dispatch(changeLimit(Number(e.target.value)))}>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                        </Select>
                    </FormControl>
                </CardContent>
            </Card>
        </Grid>
    )
}
