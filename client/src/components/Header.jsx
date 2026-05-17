import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../store/themeReducer';
import SunnyIcon from '@mui/icons-material/Sunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTranslation } from 'react-i18next';
import { FormControl } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {
    let { t: Translation, i18n } = useTranslation();
    let t = useSelector(state => state.theme.theme)
    let dispatch = useDispatch()
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={() => 
                            dispatch(
                                changeTheme(t == 'light' ? 'dark' : 'light')
                            )}
                    >

                        {
                            t == 'light' ? <DarkModeIcon /> : <SunnyIcon />
                        }
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={(theme)=>({ flexGrow: 1, display: { xs: 'none', sm: 'block' } , color: 'pink', fontFamily: theme.typography.title})}
                    >
                        {Translation('title')}
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder={Translation('search')}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <FormControl variant="standard" sx={{mx: 2}}>
                        <Select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                            <MenuItem value={"en"}>English</MenuItem>
                            <MenuItem value={"uk"}>Ukrainian</MenuItem>
                            <MenuItem value={"de"}>Deutsch</MenuItem>
                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
