import Card from "./Components/Card";
import InputSearch from "./Components/InputSearch";
import { useState } from "react";
import { Container } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [obj, setObj] = useState([]);

  return (

      <Container
        sx={{
          textAlign: "center",
          maxWidth: "450px",
          width:"100% !important",
          padding:"0 !important",
          boxSizing:"border-box",
          
        }}
      >
        <InputSearch obj={obj} setObj={setObj} />
        {obj.length > 0 &&
          obj.map((elem) => (
            <Card
              name={elem.name}
              description={elem.description}
              img={elem.img}
              url={elem.url}
              key={elem.id}
            />
          ))}
        <ToastContainer />
        <GlobalStyle/>
      </Container>

  );
}

export default App;
