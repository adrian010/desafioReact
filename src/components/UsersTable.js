import { useTable, useSortBy, useFilters, usePagination } from "react-table";

import { COLUMNS } from "./columns2";
import { useMemo } from "react";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


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
    
      <div className="cat">
      <h2 className="mt-3 text-center">Usuarios</h2>

        <table
          className="table table-bordered table-striped table-sm mt-5 mb-1"
          {...getTableProps()}
        >
          <thead className="thead-dark">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="pb-2 text-center"                    
                  >
                    {/* {" "} */}
                    <span className="atributos" {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render("Header") } 
                    </span>
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                    </span>
                    
                      {column.canFilter ? column.render("Filter") : null}
                    
                  </th>
                ))}
                <th className="text-center align-middle px-3"><h4>Acciones</h4></th>
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
                  <td className="text-center align-middle">

                      <OverlayTrigger overlay={<Tooltip >Editar Usuario </Tooltip>}>                              
                          <span className="d-inline-block material-icons icono mr-2" onClick={() => {
                        editarUsuario(row.original);
                      }}>
                          mode_edit
                          </span>                                
                      </OverlayTrigger>

                      <OverlayTrigger overlay={<Tooltip >Eliminar Usuario </Tooltip>}>                              
                          <span className="d-inline-block material-icons icono mr-2" onClick={() => {
                        eliminarUsuario(row.original.id);
                      }}>
                          delete_forever
                          </span>                                
                      </OverlayTrigger>

                      <OverlayTrigger overlay={<Tooltip >Accesos </Tooltip>}>                              
                          <span className="d-inline-block material-icons icono" onClick={() => {
                        accesos(row.original.datos);
                      }}>
                          leaderboard
                          </span>                                
                      </OverlayTrigger>

                
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className=" justify-content-center text-center bg-light my-3">
         
          <button
            className="btn btn-primary mr-1"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Anterior
          </button>
          <span className="mx-2">
            Page{""}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <button
            className="btn btn-primary mr-1"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Siguiente
          </button>
        </div>
      
    </div>
  );
};

export default UsersTable;
