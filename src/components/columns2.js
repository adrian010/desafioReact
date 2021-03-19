import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Nombre",
    accessor: "nombre",
    sortType: "basic",
    Filter: ColumnFilter,
  },
  {
    Header: "Apellido",
    accessor: "apellido",
    Filter: ColumnFilter,
  },
  {
    Header: "Dni",
    accessor: "dni",
    Filter: ColumnFilter,
  },
  {
    Header: "Email",
    accessor: "email",
    Filter: ColumnFilter,
  },
  {
    Header: "Direccion",
    accessor: "direccion",
    Filter: ColumnFilter,
  },
  {
    Header: "Fecha Alta",
    accessor: "fechaAlta",
    Filter: ColumnFilter,
  },
];
