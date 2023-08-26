import { Link } from 'react-router-dom';
import './datatable.scss'
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid';

type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string
}

const DataTable = (props: Props) => {
    function handleDelete(rowid: number) {
        console.log(rowid + " row is deleted");

    }

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src="/view.svg" alt="" />
                    </Link>
                    <div className='delete' onClick={() => handleDelete(params.row.id)}>
                        <img src="/delete.svg" alt="" />
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='datatable'>
            <DataGrid
                className='datagrid'
                rows={props.rows}
                columns={[...props.columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    )
}

export default DataTable