export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  return(
      <>
        <input
                className="inputTable"
                placeholder={"Buscar por "+column.Header}
                value={filterValue||''}
                onChange={(e)=> setFilter(e.target.value)}
            />
      </>
  );
};
