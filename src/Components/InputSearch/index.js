import api from "../../Services";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";


export default function InputSearch({ obj, setObj }) {
  const schema = yup.object().shape({
    pesquisa: yup
      .string()
      .required("O campo precisa estar preenchido")
      .matches(/\//, "É necessário barras na pesquisa"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSearch = (data) => {
    reset()

    api
      .get(`repos/${data.pesquisa}`)
      .then((res) => res)
      .then((res) => {
        const newObj = {};
        newObj.id = res.data.id;
        newObj.name = res.data.full_name;
        newObj.description = res.data.description;
        newObj.img = res.data.owner.avatar_url;
        newObj.url = res.data.html_url;
        if( obj.some(search=>search.id === res.data.id)){
            toast.error("Essa pesquisa já foi feita!");
        }else{
            setObj([...obj, newObj]);
            toast.success("Pesquisa Encontrada!")
        }
      })
      .catch((err) => {
        toast.error("Pesquisa não encontrada!");
    });
  };

  
  return (
    <>
      <h1>Pesquisa de repositórios no Github</h1>
      <p>Digite o usuário depois o repositório </p>

      <form
        onSubmit={handleSubmit(onSearch)}
        style={{
          display: "flex",
          width:"100%"
        }}
      >
        <TextField
          error={errors.pesquisa?.message}
          helperText={errors.pesquisa?.message}
          id="outlined-basic"
          label="nome-do-usuário/repositório"
          variant="outlined"
          sx={{
            bgcolor: "#fff",
            flexBasis: "70%",
          }}
          {...register("pesquisa")}
        />
        <Button
          type="submit"
          variant="contained"
          label="Pesquisar"
          sx={{
            flexBasis: "30%",
            height: "55px",
          }}
        >
          Pesquisar
        </Button>
      </form>
    </>
  );
}
