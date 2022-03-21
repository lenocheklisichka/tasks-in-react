import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {requestApi} from './api/request-api';

function Request() {
    const [checked, setChecked] = useState(false)
    const [error, setError] = useState(false)

    const onClickCallback = () => {
        setChecked(true)
        const success = false
        requestApi.createRequest(success)
            .then((res) => {
                setChecked(res.data)
            })
            .catch((error) => {
                console.log({...error});
                setError(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={onClickCallback}>request</Button>
            <Checkbox color="primary" checked={checked}/>
            <div>{error}</div>
        </div>
    )
}

export default Request;