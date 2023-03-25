import "./App.css";
import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import menu from "./components/data";
// import Expense from "./components/data";

function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState('');

  const datas = `${name} ${count}`

  useEffect(() => {
    return () => {
      console.log(datas)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div style={{alignItems:'center', marginLeft: 55}}>
    {menu.map((item) => (
      
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
          <Grid xs={item}>
            <Card sx={{ marginRight: 5, width: 400, height: 400 }}>
              <CardContent>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.image}
                  alt="{item.image}"
                />
                
                <form onSubmit={handleSubmit}>
                <Typography
                  variant="h5"
                  component="div"
                >
                  {item.name}
                </Typography>
                <input type="text" onChange={(e) => setName(e.target.value)} style={{display: 'none'}} value={item.name}></input>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
                  {item.category}
                </Typography>
                <Typography variant="body2">Php {item.price}</Typography>
                <Grid
                  container
                  rowSpacing={0}
                  columnSpacing={{ xs: 1, sm: 2, md: 1 }}
                >
                  <Grid xs={4}>
                    <input
                      id="filled-number"
                      label="Number"
                      type="number"
                      onChange={(e) => setCount(e.target.value)}
                    />
                    <CardActions>
                      <button size="small" >Add to Cart</button>
                    </CardActions>
                  </Grid>
                </Grid>
                
                </form>
                    
              </CardContent>
              
            </Card>
          </Grid>
      </Grid>



))}

</div>
  );
}

export default App;
