import React, {useEffect, useState} from 'react';
import validate from '../utils/validateInfo';
import useForm from '../utils/useForm';
import InputMask from 'react-input-mask'
import FormCodeService from "./services/FormCodeService";


const FormCode = ({submitForm, onResponse, isCodeValid}) => {

    const [resselers, setResselers] = useState([]);
    const [prefixes, setPrefixes] = useState([]);
    const [showCustomResseler, setShowCustomResseler] = useState(false);

    const {handleChange, handleSubmit, values, errors} = useForm(
        submitForm,
        validate,
        onResponse
    );

    const handleChangeResselers = (event) => {

        if (event.target.value === 'others') {
            setShowCustomResseler(true);
        } else {
            setShowCustomResseler(false);
            handleChange(event);
        }

    }

    useEffect(() => {

        FormCodeService.getResselers().then(function (data) {
            setResselers(data);
        })
        FormCodeService.getPrefixes().then(function (data) {
            setPrefixes(data);
        })

    }, []);


    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className='form-group'>
                <label className="form-label">Votre prénom :</label>
                <input
                    className="form-control"
                    type='text'
                    name='firstname'
                    placeholder='Prénom'
                    value={values.firstname}
                    onChange={handleChange}
                />
                {errors.firstname && <p className="form-text text-danger">{errors.firstname}</p>}
            </div>
            <div className="form-group">
                <label className="form-label">Votre nom :</label>
                <input
                    className="form-control"
                    type='text'
                    name='lastname'
                    placeholder='Nom'
                    value={values.lastname}
                    onChange={handleChange}
                />
                {errors.name && <p className="form-text text-danger">{errors.name}</p>}
            </div>
            <div className="form-group">
                <label className="form-label">Votre email :</label>
                <input
                    className="form-control"
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="form-text text-danger">{errors.email}</p>}
            </div>
            <div className="form-group">
                <label className="form-label">Sélectionnez votre revendeur :</label>
                <select className="form-select" name="resellers" id="resellers" placeholder='Revendeur'
                        onChange={handleChangeResselers} required>
                    <option value="" defaultValue hidden>Revendeur</option>
                    {resselers.map((resseler) => (
                        <option key={resseler.name} value={resseler.id}>{resseler.name}</option>
                    ))}
                    <option value='others'>Autres</option>
                </select>
                {errors.reseller && <p className="form-text text-danger">{errors.reseller}</p>}
            </div>
            {showCustomResseler && <div className="form-group">
                <label className="form-label">Votre revendeur :</label>
                <input
                    className="form-control"
                    type='text'
                    name='customResseler'
                    placeholder='Revendeur'
                    value={values.customResseler}
                    onChange={handleChange}
                />
                {errors.customResseler && <p className="form-text text-danger">{errors.customResseler}</p>}
            </div>}
            <div className="form-group">
                <label className="form-label">Préfix</label>
                <select className="form-select" name="prefix" id="prefix" placeholder='Préfix' onChange={handleChange}>
                    <option value="" defaultValue hidden>Prefix</option>
                    {prefixes.map((prefix) => (
                        <option value={prefix} key={prefix}>{prefix}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label className="form-label">Votre code :</label>
                <InputMask className="form-control" mask="***** - ***** - *****" maskChar=" " name='code'
                           onChange={handleChange}/>
                {errors.code && <p className="form-text text-danger">{errors.code}</p>}
                {!isCodeValid && <p className="form-text text-danger">Le code est invalide</p>}
            </div>
            <div className="form-group button-container">
                <button className="btn btn-default btn-success" type='submit'>
                    Valider
                </button>
            </div>

        </form>
    );
};

export default FormCode;