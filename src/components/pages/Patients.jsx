import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useProductContext } from "../context/ProductContextProvider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { TextField } from "@mui/material";

const Patients = () => {
  const API = "http://localhost:8002/products";
  const { getProducts } = useProductContext();
  const [currentData, setCurrentData] = useState([]);
  const [thisWord, setThisWord] = useState("");
  const [type1, setType1] = useState("");
  const INPVALUES = {
    usen: "Усеналиев Чолпонбек Эркинбекович",
    mat: "Матиев Ысакбек Рашидович",
    tyn: "Тынчтыкбеков Талант Тынчтыкбекович",
    isa: "Исаева Айгерим Сапаргалиевна",
    jam: "Жаманкулова Фарида Ахмеджановна",
  };

  useEffect(() => {
    axios.get(`${API}`).then((response) => {
      setCurrentData(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`${API}`).then((response) => {
      setCurrentData(response.data);
    });
  }, [thisWord, type1]);

  const handleChange = (e) => {
    setThisWord(e.target.value);
  };
  const handleChange2 = (e) => {
    setType1(e.target.value);
  };

  const onClicks = () => {
    let arr = currentData.filter((elem) => {
      return (
        elem.doctor.toString().toLowerCase().split(" ")[0] ===
        thisWord.toString().toLowerCase().split(" ")[0]
      );
    });
    setCurrentData(arr);
  };
  const onClicks2 = () => {
    let arr = currentData.filter((elem) => {
      return (
        elem.type.toString().toLowerCase().split(" ")[0] ===
        type1.toString().toLowerCase().split(" ")[0]
      );
    });
    setCurrentData(arr);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ display: "flex" }}>
        <TextField
          id="outlined-select-currency"
          select
          label="Выберите специалиста"
          value={thisWord}
          onChange={(e) => {
            handleChange(e);
          }}
          fullWidth
        >
          <MenuItem value={INPVALUES.usen}>{INPVALUES.usen}</MenuItem>
          <MenuItem value={INPVALUES.mat}>{INPVALUES.mat}</MenuItem>
          <MenuItem value={INPVALUES.tyn}>{INPVALUES.tyn}</MenuItem>
          <MenuItem value={INPVALUES.isa}>{INPVALUES.isa}</MenuItem>
          <MenuItem value={INPVALUES.jam}>{INPVALUES.jam}</MenuItem>
        </TextField>
        <button onClick={onClicks}>OK</button>
        {/* ========================================================================================================================= */}

        <TextField
          id="outlined-select-currency"
          select
          label="Выберите специалиста"
          value={type1}
          onChange={(e) => {
            handleChange2(e);
          }}
          fullWidth
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
        </TextField>
        <button onClick={onClicks2}>OK</button>
      </div>
      {/* ========================================================================================================================= */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>История болезни</TableCell>
              <TableCell>Имя</TableCell>
              <TableCell>Лечащий врач</TableCell>
              <TableCell>Откуда переведен</TableCell>
              <TableCell>Дата госпитализации</TableCell>
              <TableCell>Удалить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row?.doctor}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>Иконка</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Patients;
