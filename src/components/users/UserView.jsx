import { Fragment } from "react"
import { ProgressSpinner } from "primereact/progressspinner"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Button} from 'primereact/button';

const UsersView = ({data, loadingData}) => {
    const bodyIsAdmin = (rowData) => {
        return(
            rowData.is_admin ? <span>Si</span> : <span>No</span>
        )
    }

    const bodyActions = (rowData) => {
        return(
            <div>
                <Button label="Editar"/>
                <Button label="Eliminar"/>
            </div>
        )
            
    }
    return (
    <Fragment>
        <h1>Usuarios</h1>        {loadingData ? (
            <ProgressSpinner />
        ) : 
        <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
        <Column field="username" header="Nombre de usuario"></Column>
        <Column field="is_admin" body={bodyIsAdmin} header="Es admin?"></Column>
        <Column body={bodyActions} header="Acciones"></Column>


        </DataTable>
            
            }
        </Fragment>  
        
    )
}

export default UsersView
