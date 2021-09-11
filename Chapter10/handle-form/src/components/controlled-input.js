import React, { useState } from "react";

const ControlledInput = () => {
    // const [firstName, setFirstName] = useState('');
    // const [email, setEmail] = useState('');
    // const [age, setAge] = useState('');
    const [info, setInfo] = useState({ firstName: '', email: '', age: '' });
    const [members, setMembers] = useState([]);

    const handleInputValue = (e) => {
        const nameField = e.target.name;
        const valueField = e.target.value;
        // console.log('nameField: ', nameField);
        // console.log('valueField: ', valueField);
        setInfo({ ...info, [nameField]: valueField });
    }
    const handleSubmitAddMember = (e) => {
      e.preventDefault();
      if (info.firstName && info.email && info.age) {
          // setMembers([...members, {firstName, email}]);
          // setFirstName('');
          // setEmail('');
          setMembers([...members, info]);
          setInfo({ firstName: '', email: '', age: '' });
      } else {
          console.log('Empty value, Please input name and email');
      }
    }

    return (
        <>
            <article>
                <form className={'form-member-class-51'} onSubmit={handleSubmitAddMember}>
                    <div>
                        <label htmlFor={'firstName'}>Name: </label>
                        <input
                            type={'text'}
                            id={'firstName'}
                            name={'firstName'}
                            value={info.firstName}
                            onChange={handleInputValue}
                        />
                    </div>
                    <div>
                        <label htmlFor={'email'}>Email: </label>
                        <input
                            type={'email'}
                            id={'email'}
                            name={'email'}
                            value={info.email}
                            onChange={handleInputValue}
                        />
                    </div>
                    <div>
                        <label htmlFor={'age'}>Age: </label>
                        <input
                            type={'text'}
                            id={'age'}
                            name={'age'}
                            value={info.age}
                            onChange={handleInputValue}
                        />
                    </div>
                    <button type={'submit'}>Add Member</button>
                </form>
                <div>
                    {members.map((member, index) => {
                        const { firstName, email } = member;
                        return (
                            <div key={index}>
                                <h4>{firstName}</h4>
                                <h4>{email}</h4>
                            </div>
                        )
                    })}
                </div>
            </article>
        </>
    )
}

export default ControlledInput;