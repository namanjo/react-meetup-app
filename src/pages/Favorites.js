import { useContext } from "react"
import { MeetupContext } from "../store/contextData"
import MeetupList from "../components/meetups/MeetupList";


function Favorites() {

    const context_data = useContext(MeetupContext);

    let content;

    if (context_data.totalFavorites === 0) {
        content = <p>You got no favorites yet. Start adding some?</p>;
    } else {
        content = <MeetupList meetups={context_data.favorites} />;
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
      </section>
    )
}

export default Favorites
