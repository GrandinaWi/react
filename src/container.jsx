import React from "react";
import Table from 'react-bootstrap/Table';
function Container({data}){
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Цена</th>
            </tr>
            </thead>
            <tbody>
            {data.map((obj) => (
                <tr key={obj.rank}>
                    <td>{obj.rank}</td>
                    <td>
                        <img style={{ width: 50, height: 50 }} src={obj.icon} alt={obj.name} />
                        {obj.name}
                    </td>
                    <td>{obj.price}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default Container;