import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { Avatar } from '@mui/material';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function ChipsArray(props) {
    //const chips =  props.items?.map((value,index)=>({key:index,label:value}));
    const [chipData, setChipData] = React.useState(props.items);

    const finalChip = chipData?.map((value, index) => ({ key: index, label: value }))
    console.log(finalChip)
    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    function handleSelecetedTags(items) {
        console.log(items);
      }
    return (
        
        <Paper
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap-reverse',
                listStyle: 'none',
                p: 0.5,
                m: 0,
            }}
            component="ul"
        >
            {finalChip?.map((data) => {
                let icon;

                if (data.label.includes('React')) {
                    icon = <TagFacesIcon />;
                }

                return (
                    <>
                    <ListItem key={data.key}>
                        {


                            props.type === "degree" ? <Chip icon={icon} variant="outlined" color="secondary" label={data.label} onDelete={handleDelete(data)} avatar={<Avatar>{data.label[0]}</Avatar>} />
                                :
                                props.type === "skills" ? <Chip variant="outlined" color="primary" label={data.label} onDelete={handleDelete(data)} avatar={<Avatar>{data.label[0]}</Avatar>} />
                                    : 
                                    props.type === "designation" ? <Chip variant="outlined" color="success" label={data.label} onDelete={handleDelete(data)} avatar={<Avatar>{data.label[0]}</Avatar>} />
                                        : 
                                        props.type === "tags" ? <Chip variant="outlined" color="warning" label={data.label} onDelete={handleDelete(data)} avatar={<Avatar>{data.label[0]}</Avatar>} />
                                        : 
                                        <Chip icon={icon} label={data.label} onDelete={data.label === '' ? undefined : handleDelete(data)}/>


                        }

                    </ListItem>

                    
                    </>
                );
            })}
        </Paper>
    );
}