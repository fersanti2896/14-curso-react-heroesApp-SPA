import PropTypes from 'prop-types';
import { getHeroesByPublisher } from '../helpers';
import { HeroeCards } from './';

export const HeroeList = ({ publisher }) => {
    const heroes = getHeroesByPublisher( publisher );

    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {
                    heroes.map( hero => 
                        <HeroeCards key={ hero.id } hero={ hero } />
                     )
                }
            </div>
        </>
    )
}

HeroeList.propTypes = {
    publisher: PropTypes.string.isRequired
}
