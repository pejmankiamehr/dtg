import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "50rem" , p: 2, border: '1px solid grey',}} margin={5}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Machin1"  sx={{   p: 2, border: '1px solid grey'}} />
        <BottomNavigationAction label="Machin2" sx={{   p: 2, border: '1px solid grey'}} style={{"margin":"0 3rem"}}  />
        <BottomNavigationAction label="Machin3"  sx={{   p: 2, border: '1px solid grey'}}/>
        
      </BottomNavigation>
    </Box>
  );
}

