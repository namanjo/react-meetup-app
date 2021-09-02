import classes from './MeetupItem.module.css'
import Card from '../ui/Card'

import { useContext } from 'react'
import { MeetupContext } from '../../store/contextData'


function MeetupItem(props) {

    const context_data = useContext(MeetupContext);
    const itemIsFavorite = context_data.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            context_data.removeFavorite(props.id);
        } else {
            context_data.addFavorite({
            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            address: props.address,
        });
        }
    }


    return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
                </button>
            </div>
            </Card>
        </li>
    )
}

export default MeetupItem
