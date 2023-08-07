import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { Divider, ListItemAvatar, Typography } from '@mui/material';
import { Avatar } from '@material-ui/core';

export default function CustomList(props) {
    const { width, itemSize, itemCount, overscanCount } = props;
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
            {props.items?.map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <>
                        <Divider variant="outset" component="li" />  <ListItem alignItems="flex-start">
                            <ListItemText
                                primary={value}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {/* Ali Connors */}
                                        </Typography>
                                        {/* {" — I'll be in your neighborhood doing errands this…"} */}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="outset" component="li" />
                    </>
                );
            })}
        </List>
    );
}