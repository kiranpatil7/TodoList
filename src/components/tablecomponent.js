import React from "react";
import { Table } from 'reactstrap'

const TableHeader = () => {
    return (
        <tr>
            <td>Name</td>
            <td>Job</td>
            <td>Remove</td>
        </tr>
    )
}

const TableBody = (props) => {
    // console.log(props.character)
    const rows = props.character.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.remove(index)} className="btn btn-danger">Delete</button></td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}
const Table1 = (props) => {
    // console.log(props.characterData)
    const aaray = props.characterData
    return (
        <Table>
            <TableHeader />
            <TableBody character={aaray} remove={props.removeCharacter} />
        </Table>

    )
}

export default Table1;