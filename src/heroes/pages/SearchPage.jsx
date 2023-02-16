import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from "../../hooks"
import { HeroeCards } from "../components"

export const SearchPage = () => {
    /* Se usa el navigate para obtener la navegación */
    const navigate = useNavigate();
    /* Se usa location para obtener la información de la ubicación de la localizacion */
    const location = useLocation();
    
    const { q = ''} = queryString.parse(location.search);

    const { searchText, onInputChange } = useForm({
        searchText: ''
    });

    const onSearchSubmit = ( event ) => {
        event.preventDefault();

        if( searchText.trim().length <= 1 ) return;
        
        navigate(`?q=${ searchText.toLowerCase().trim() }`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={ onSearchSubmit } >
                        <input  autoComplete="off" 
                                className="form-control"
                                name="searchText"
                                placeholder="Search a hero"
                                onChange={ onInputChange } 
                                type="text"
                                value={ searchText } />

                        <button className="btn btn-outline-primary mt-3" >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div className="alert alert-primary">
                        Search a hero
                    </div>

                    <div className="alert alert-danger">
                        No here with <b>{ q }</b>
                    </div>

                    {/* <HeroeCards /> */}
                </div>
            </div>
        </>
    )
}
