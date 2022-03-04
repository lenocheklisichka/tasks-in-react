import React from 'react'
import classes from './../Header.module.css'

function Error404() {
    return (
        <div>
            <div className={classes.errorImg}>
                <img src={'https://i.pinimg.com/originals/b3/81/38/b381389b486adb29dec8d5bbea4b65e2.png'} alt={'404'} style={{width: '200px'}}/>
            </div>
            <h2 className={classes.error404}>404</h2>
            <h3 className={classes.pageError}>Oops! 404 - Page not found! </h3>)
        </div>
    )
}

export default Error404
