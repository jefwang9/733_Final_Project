import './App.css';
import React, { Component } from "react";
import Box from '@mui/material/Box';

import HeatMap from './components/HeatMap';

class App extends Component {
  render() {
    return (
      // <div>
      //   <Box sx={{ bgcolor: 'background.paper',
      //               boxShadow: 1,
      //               borderRadius: 1,
      //               p: 2,
      //               minHeight: 900,}}>
      //     <div className="App">
      //       <div style={{ width: '100%', height: '1000px' }}>
      //         <HeatMap/>
      //       </div>
      //     </div>
      //   </Box>
      // </div>

       <div className="App">
          <div style={{ width: '100%', height: '1000px' }}>
            <HeatMap/>
          </div>
        </div>
      
      );
  }
 
}

export default App;

