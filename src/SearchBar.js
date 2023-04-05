import { Badge, Button, IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export function SearchBar() {
    return (
        <div className='search-bar'>
            <div>
                <TextField size="small" id="outlined-basic" label="Search for..." variant="outlined" />
                <Button size="medium" variant="contained"><SearchIcon /></Button>
            </div>
            <div>
                <IconButton aria-label="notify">
                    <Badge badgeContent={"4+"} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton aria-label="mail">
                    <Badge badgeContent={7} color="error">
                        <EmailIcon />
                    </Badge>
                </IconButton>
                <span className="p-name">Rajendran Ramasamy</span>
                <IconButton aria-label="Acc">
                    <AccountCircleIcon />
                </IconButton>
            </div>
        </div >
    );
}
