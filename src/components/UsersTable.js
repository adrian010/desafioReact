import { useTable, useSortBy, useFilters, usePagination } from "react-table";

import { COLUMNS } from "./columns2";
import { useMemo } from "react";

const UsersTable = ({ usuarios, eliminarUsuario, editarUsuario, accesos }) => {
  const columns = useMemo(() => COLUMNS, []);
  //const data = useMemo(()=> usuarios, [])
  const data = usuarios;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      disableSortRemove: true,
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const { pageIndex } = state;

  return (
    <>
      <hr />
      <h2 className="mt-3 text-center">Usuarios</h2>

      <div className="table-responsive">
        <table
          className="table table-bordered table-striped table-sm mt-5"
          {...getTableProps()}
        >
          <thead className="thead-dark">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="pb-2"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {" "}
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                    </span>
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>
                ))}
                <th className="text-center align-middle">Acciones</th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")} </td>
                    );
                  })}
                  <td>
                    <button
                      className="btn-sm btn btn-primary mr-1"
                      onClick={() => {
                        accesos(row.original.datos);
                      }}
                    >
                      Accesos
                    </button>
                    <button
                      className="btn-sm btn btn-primary mr-1 mt-1"
                      onClick={() => {
                        editarUsuario(row.original);
                      }}
                    >
                      editar
                    </button>
                    <button
                      className="btn-sm btn btn-danger mt-1"
                      onClick={() => {
                        eliminarUsuario(row.original.id);
                      }}
                    >
                      eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className=" justify-content-center text-center">
          <span className="mr-2">
            Page{""}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <button
            className="btn btn-primary mr-1"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Anterior
          </button>
          <button
            className="btn btn-primary mr-1"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
