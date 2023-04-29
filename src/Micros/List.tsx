import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function AlignItemsList({ contents }: any) {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {contents.map((content: any, key: any) => {
                return (
                    <ListItem alignItems="flex-start" key={key}>
                        <ListItemText
                            primary={content}
                        />
                    </ListItem>
                )
            })}
        </List>
    );
}
