import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import s from "./HW12.module.css";
import SuperSelect from "./SuperSelect";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType>(state => state.theme.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme + s.App]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div className={s.dropDownList}>
                <SuperSelect
                    options={themes }
                    onChangeOption={onChangeCallback}
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
