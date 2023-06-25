function ListGroup() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]
    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
                {items.map(city =>
                    <li key={city } className="list-group-item">{city}</li>
                )}
            </ul>
        </>
    );
}

export default ListGroup;