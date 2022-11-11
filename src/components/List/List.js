import './List.css';
import Card from '../Card/Card'

const List = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map( monster  => {
            return <Card key={monster.id} monster={monster} />
        })}
    </div>
)

export default List;