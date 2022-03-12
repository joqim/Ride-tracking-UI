import { useEffect } from 'react';
import styles from './Filters.module.css';
import { useStore } from '../../Context/Store';
const _ = require("lodash");

export const DropMenu = ({ setMenu, props }) => {

    const { drop_menu, control } = styles;
    const { filters, handleFilters } = useStore();

    const { getRides } = useStore();
    const rides = getRides();
    let statesArray = rides.map(ride => {
        return ride.state;
    })
    statesArray = _.uniq(statesArray)
    
    let citiesArray = rides.map(ride => {
        return ride.city;
    })
    citiesArray = _.uniq(citiesArray)

    useEffect(() => {

        function handleCLick( { target } ) {
            const menu = document.getElementsByClassName(drop_menu)[0];
            if( !menu.contains( target ) ) {
                setMenu( false );
            }
        }

        function handleKeyboard({ key }) {

            if( key === "Escape" ) {
                setMenu( false );
            }
        }

        document.addEventListener("keydown", handleKeyboard);
        document.addEventListener("click", handleCLick);

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
            document.removeEventListener("click", handleCLick);
        }

    }, [ drop_menu, setMenu ]);



    return (
        
        <ul className = { drop_menu } >
            <li>Filters</li>
            
            <li>
                <select 
                    onChange = { ({ target }) => handleFilters({ ...filters, state: target.value }) } 
                    value = { filters.state } 
                    className = { control }>
                        <option value = "">Select State</option>
                            {statesArray.map((state, id) => {
                                return (
                                    <option key={id}>{state}</option>
                                )
                            })}
                </select>
            </li>
            
            <li>
                <select 
                    onChange = { ({ target }) => handleFilters({ ...filters, city: target.value }) }
                    value = { filters.city } 
                    className = { control }>
                        <option value = "">Select City</option>
                            {citiesArray.map((city, id) => {
                                return (
                                    <option key={id}>{city}</option>
                                )
                            })}
                </select>
            </li>
        </ul>
    );
};