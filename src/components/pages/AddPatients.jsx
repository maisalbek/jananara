import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { useProductContext } from "../context/ProductContextProvider";

const AddPatients = () => {
  const { addProduct } = useProductContext();
  const [inpValues, setInpValues] = useState({
    number: "",
    name: "",
    date: "",
    type: "",
    description: "",
    doctor: "",
    datehp: "",
    blood: "",
    rezusfactor: "",
    dop: "",
    temperature: "",
    breathrate: "",
    pulse: "",
    Spo2: "",
    AD: "",
    complaints: "",
    objStatus: "",
  });

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(inpValues);
  };

  return (
    <div>
      <div style={{ display: "flex", color: "white" }}>
        <h2>Добавить данные пациента</h2>
      </div>
      <div
        className="form-border"
        style={{ margin: "1% 2%", backgroundColor: "white", zIndex: "1" }}
      >
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "grey",
          }}
        >
          <TextField
            name="number"
            value={inpValues.number}
            type="number"
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            label="История болезни"
            variant="standard"
            sx={{ color: "white" }}
            margin="normal"
          />
          <br />
          <TextField
            name="name"
            value={inpValues.name}
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            label="ФИО"
            variant="standard"
            sx={{ color: "white", width: "90%", marginTop: "20px" }}
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Переведен</InputLabel>
            <Select
              sx={{ marginTop: "20px", zIndex: "1" }}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="type"
              value={inpValues.type}
              label="Type"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"Кардиология"}>Кардиология</MenuItem>
              <MenuItem value={"Неврология"}>Неврология</MenuItem>
              <MenuItem value={"surgery"}>Хирургия</MenuItem>
              <MenuItem value={"therapy"}>Терапия</MenuItem>
              <MenuItem value={"Травмотология"}>Травмотология</MenuItem>
              <MenuItem value={"Урология"}>Урология</MenuItem>
              <MenuItem value={"Отделение ЛОР"}>Отделение ЛОР</MenuItem>
              <MenuItem value={"Детское отделение"}>Детское отделение</MenuItem>
              <MenuItem value={"Инфекционное отделение"}>
                Инфекционное отделение
              </MenuItem>
              <MenuItem value={"Онкология"}>Онкология</MenuItem>
              <MenuItem value={"Отделение офтальмологии"}>
                Отделение офтальмологии
              </MenuItem>
              <MenuItem Item value={"Отделение психо-наркологии"}>
                Отделение психо-наркологии
              </MenuItem>
              <MenuItem value={"Отделение краткосрочного пребывания"}>
                Отделение краткосрочного пребывания
              </MenuItem>
            </Select>
          </FormControl>

          <Stack component="form" noValidate spacing={3}>
            <TextField
              id="date"
              name="date"
              value={inpValues.date}
              label="Дата рождения"
              type="date"
              defaultValue="2022-06-07"
              onChange={(e) => handleChange(e)}
              sx={{ width: 220, marginTop: "20px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Группа крови</InputLabel>
            <Select
              sx={{ marginTop: "20px" }}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="blood"
              value={inpValues.blood}
              label="Группа крови"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"O"}>O</MenuItem>
              <MenuItem value={"A"}>A</MenuItem>
              <MenuItem value={"B"}>B</MenuItem>
              <MenuItem value={"AB"}>AB</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Резус фактор</InputLabel>
            <Select
              sx={{ marginTop: "20px" }}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="rezusfactor"
              value={inpValues.rezusfactor}
              label="Резус фактор"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"Положительный"}>Положительный</MenuItem>
              <MenuItem value={"Отрицательный"}>Отрицательный</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Состояние</InputLabel>
            <Select
              sx={{ marginTop: "20px" }}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="description"
              value={inpValues.description}
              label="Type"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"Тяжелое"}>Тяжелое</MenuItem>
              <MenuItem value={"Крайне тяжелое"}>Крайне тяжелое</MenuItem>
              <MenuItem value={"Огональное"}>Огональное</MenuItem>
            </Select>
          </FormControl>

          <div className="obj" style={{ fontSize: "3rem" }}>
            <InputLabel sx={{ width: "600px", marginTop: "20px" }}>
              Обьективные данные
            </InputLabel>

            <TextField
              id="temperature"
              name="temperature"
              value={inpValues.temperature}
              label="Температура"
              onChange={(e) => handleChange(e)}
              sx={{ width: 220, marginTop: "20px", fontSize: "1.5rem" }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              className="breath"
              id="breath"
              name="breathrate"
              value={inpValues.breathrate}
              label="Частота дыхания"
              onChange={(e) => handleChange(e)}
              sx={{
                width: 220,
                marginTop: "20px",
                color: "black",
                fontSize: "16px",
              }}
              InputLabelProps={{
                shrink: true,
              }}
            >
              <h2>breath</h2>
            </TextField>
            <TextField
              id="pulse"
              name="pulse"
              value={inpValues.pulse}
              label="Пульс"
              onChange={(e) => handleChange(e)}
              sx={{ width: 220, marginTop: "20px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="spo2"
              name="Spo2"
              value={inpValues.Spo2}
              label="Spo2"
              onChange={(e) => handleChange(e)}
              sx={{ width: 220, marginTop: "20px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="AD"
              name="AD"
              value={inpValues.AD}
              label="АД"
              onChange={(e) => handleChange(e)}
              sx={{ width: 220, marginTop: "20px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <TextField
              id="complains"
              name="complaints"
              value={inpValues.complaints}
              label="Жалобы"
              onChange={(e) => handleChange(e)}
              sx={{ width: "50%", marginTop: "20px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <TextField
              id="obj"
              name="objStatus"
              value={inpValues.objStatus}
              label="Обьективный статус"
              onChange={(e) => handleChange(e)}
              sx={{ width: "50%", marginTop: "20px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {/* </Select> */}
            {/* </FormControl> */}
          </div>

          <TextField
            name="dop"
            value={inpValues.dop}
            onChange={(e) => handleChange(e)}
            id="standard-basic"
            label="Рекомендации"
            variant="standard"
            sx={{ color: "white", marginTop: "20px", width: "100%" }}
            margin="normal"
          />

          <Stack component="form" noValidate spacing={3}>
            <TextField
              id="datetime-local"
              name="datehp"
              value={inpValues.datehp}
              onChange={(e) => handleChange(e)}
              label="Дата госпитализации"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              sx={{ width: 250, marginTop: "20px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Лечащий врач</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="doctor"
              value={inpValues.doctor}
              label="Type"
              onChange={(e) => handleChange(e)}
              sx={{ marginTop: "20px" }}
            >
              <MenuItem value={"Усеналиев Чолпонбек Эркинбекович"}>
                Усеналиев Чолпонбек Эркинбекович
              </MenuItem>
              <MenuItem value={"Матиев Ысакбек Рашидович"}>
                Матиев Ысакбек Рашидович
              </MenuItem>
              <MenuItem value={"Тынчтыкбеков Талант Тынчтыкбекович"}>
                Тынчтыкбеков Талант Тынчтыкбекович
              </MenuItem>
              <MenuItem value={"Исаева Айгерим Сапаргалиевна"}>
                Исаева Айгерим Сапаргалиевна
              </MenuItem>
              <MenuItem value={"Жаманкулова Фарида ахмеджановна"}>
                Жаманкулова Фарида Ахмеджановна
              </MenuItem>
            </Select>
          </FormControl>

          <div
            className="button"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "black",
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
                width: "30%",
                margin: "2%",
              }}
            >
              Добавить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatients;
