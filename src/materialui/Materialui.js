import { Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
const Materialui = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (

  
    <div>
      //Button
      <Stack direction="row" spacing={3}>
        <Button variant="text">Text</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="outlined" sizse="small">
          Outlined
        </Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
        
      </Stack>

    //checkbox
   
    <div>
      <Checkbox aria-label="Checkbox demo"  size="small" />
      <Checkbox aria-label="Checkbox demo" defaultChecked />
      <Checkbox
        aria-label="Checkbox demo"
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
        <Checkbox aria-label="Checkbox demo" disabled checked />

    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
 
    </div>

    //card

   <Card style={{ maxWidth: 345, margin: 'auto', marginTop: 20, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom style={{ fontWeight: 'bold' }}>
          Professional Card
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" style={{ marginBottom: 12 }}>
          Subtitle or Description
        </Typography>
        <Typography variant="body1" color="textPrimary" paragraph>
          This enhanced card example uses Material-UI components and styles to create a more professional appearance.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          It includes an image, better typography, and improved layout for a more polished look.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Learn More</Button>
        <Button size="small" color="primary">Share</Button>
      </CardActions>
    </Card>

    //select

    <Box sx={{ minWidth: 100 }}>
    <FormControl >
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </Box>

<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />
</div>
  );
};

export default Materialui;
