import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {requestApi} from './api/request-api';

function Request() {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        const success = false
        requestApi.createRequest(success)
            .then((res) => {
                setChecked(res.data)
            })
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }, [])

    const onClickCallback = () => {
        setChecked(true)
    }

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={onClickCallback}>request</Button>
            <Checkbox color="primary" checked={checked}/>
        </div>
    )
}

export default Request;