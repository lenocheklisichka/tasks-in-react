import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import classes from "./Loading.module.css"

function HW10() {
    const isLoading = useSelector<AppStoreType>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    }

    return (
        <div>
            <hr/>
            homeworks 10
            <div className={classes.loading}>
                {isLoading
                    ? (
                        <div className={classes.isLoading}>
                                <svg viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
                                    <circle className={classes.circle1} cx="32" cy="32" r="25"/>
                                    <circle className={classes.circle2 } transform="rotate(-90 32 32)" cx="32" cy="32" r="25">
                                        <animate attributeName="stroke-dashoffset"
                                                 values="0;143.92;130.84;117.76;104.68;91.6;78.52;65.44;52.36;39.28;26.22;13.14;0"
                                                 dur="3s" repeatCount="indefinite" calcMode="discrete"/>
                                    </circle>
                                </svg>
                        </div>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
