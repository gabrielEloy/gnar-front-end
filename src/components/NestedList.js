import React from 'react'

const NestedList = (props) => (
    <>
        {!props.data.length
            ? <p className="text-center" >Sorry, the ID you are looking for doesn't exist</p>
            : (props.data.map(({ id, name, shifts }) => (
                <ul className="list-group">
                    <li className="list-group-item">{`Id: ${id} | name: ${name}`}</li>
                    {shifts.map(shift => (
                        <ul className="list-group">
                            <li className="list-group-item">
                                {`shift ID - ${shift.id}`}
                                <ul className="list-group" >
                                    <li className="list-group-item">{`clock in:  ${shift.clock_in}`}</li>
                                    <li className="list-group-item">{`clock out:  ${shift.clock_out}`}</li>
                                    <li className="list-group-item">{`employee:  ${shift.employee.name}`}</li>
                                </ul>
                            </li>
                        </ul>
                    ))}
                </ul>
            )))}
    </>
)

export default NestedList
