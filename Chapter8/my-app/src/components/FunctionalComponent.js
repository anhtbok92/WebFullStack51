import React from 'react';

const FunctionalComponent = function ({ name, age, university, family }) {
    // console.log('functionalComponentProps: ', props);
    // React hooks:
    return (
        <div className={"functional-component"}>
            <h1>Welcome ! This is functional component</h1>
            <h3>{name}</h3><br />
            <h3>{age}</h3><br />
            <h3>{university}</h3><br />
            <div>{family.map((value, key) => {
                return (
                    <h5 key={key}>{value}</h5>
                )
            })}</div>
        </div>
    );
}

export default FunctionalComponent;