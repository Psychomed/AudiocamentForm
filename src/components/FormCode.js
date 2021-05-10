import React from 'react';
import validate from '../validateInfo';
import useForm from '../useForm';
import InputMask from 'react-input-mask'


const prefixes = [
    'MR0',
    'MR12'
]

const resellers = [
    {
        name: 'Zenlatitude',
        value: 'zenlatitude'
    },
    {
        name: 'Psiostore',
        value: 'psiostore'
    },
    {
        name: 'EchoSanté',
        value: 'echosante'
    },
    {
        name: 'En pharmacie',
        value: 'pharmacy'
    },
    {
        name: 'Autre',
        value: 'other'
    }
]


const FormCode = ({ submitForm }) => {

    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label>Votre prénom :</label>
                <input
                    type='text'
                    name='firstname'
                    placeholder='Prénom'
                    value={values.firstname}
                    onChange={handleChange}
                />
                {errors.firstname && <p>{errors.firstname}</p>}
            </div>
            <div>
                <label>Votre nom :</label>
                <input
                    type='text'
                    name='name'
                    placeholder='Nom'
                    value={values.name}
                    onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Votre email :</label>
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Sélectionnez votre revendeur :</label>
                <select name="resellers" id="resellers" placeholder='Revendeur' onChange={handleChange} required>
                    <option value="" defaultValue hidden>Revendeur</option>
                    <option value="zenlatitude">Zenlatitudes</option>
                    <option value="psiostore">Psiostore</option>
                    <option value="eco_sante">EchoSanté</option>
                    <option value="parrot">En pharmacie</option>
                    <option value="spider">Autres</option>
                </select>
                {errors.reseller && <p>{errors.reseller}</p>}
            </div>
            <div>
                <label>Préfix</label>
                <select name="prefix" id="prefix" placeholder='Préfix' onChange={handleChange}>
                    <option value="MR0">MR0</option>
                    <option value="MR12">MR12</option>
                </select>
            </div>
            <div>
                <label>Votre code :</label>
                <InputMask mask="***** - ***** - *****" maskChar=" " name='code' onChange={handleChange} />
                {errors.code && <p>{errors.code}</p>}
            </div>
            <button type='submit'>
                Valider
        </button>
        </form>
    );
};

export default FormCode;