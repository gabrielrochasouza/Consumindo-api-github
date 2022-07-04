import { Avatar, Grid, Box, IconButton } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
export default function Card({ name, img, description, url }) {
  return (
    <Box
      container
      //spacing={12}
      sx={{
        backgroundColor: "#fff",
        margin: "20px 0",
        padding: "10px 5px",
        borderRadius: "5px",
        fontFamily: "Roboto",
        maxWidth: "450px",
        minHeight: "100px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid item xs={12}>
        <ListItem sx={{ justifyContent: "space-between" }}>
          <a href={url} title={name} target="_blank" rel="noreferrer">
            <Avatar
              alt={name}
              src={img}
              sx={{
                width: 50,
                height: 50,
                border: "3px solid blue ",
              }}
            />
          </a>
          <div style={{ padding: "0 3px 0 20px", flexBasis: "90%" }}>
            <h2 style={{ fontSize: "14px", margin: "10px 0 0" }}>{name}</h2>
            <p
              style={{
                color: "rgb(0,0,0,0.5)",
                fontSize: "12px",
                margin: "0 0 10px",
              }}
            >
              {description}
            </p>
          </div>
          <a href={url} target="_blanck" title={name}>
            <IconButton sx={{ bgcolor: "#f1f1f1" }}>
              <ArrowForwardIos sx={{ width: "8px", height: "8px" }} />
            </IconButton>
          </a>
        </ListItem>
      </Grid>
    </Box>
  );
}
