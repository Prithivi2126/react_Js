import { Button, Checkbox, FormControlLabel, FormGroup, IconButton, Stack } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Materialui = () => {
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
    </div>
  );
};

export default Materialui;
