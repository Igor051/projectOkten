import React from "react";
import style from './Users.module.css'

function Users(props) {
    if (props.users.length === 0) {
        props.setUser([{
                id: 1,
                photoUrl: 'https://pbs.twimg.com/profile_images/378800000098702098/8c576c71e68122c3f8f5367e44cb4c41_400x400.jpeg',
                followed: false,
                fullName: 'Igor',
                status: 'LOVE football',
                location: {city: 'Ivano-Frankivsk', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://pbs.twimg.com/profile_images/378800000098702098/8c576c71e68122c3f8f5367e44cb4c41_400x400.jpeg',
                followed: true,
                fullName: 'Vasyl',
                status: 'I am looking for a job right now',
                location: {city: 'Lviv', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://pbs.twimg.com/profile_images/378800000098702098/8c576c71e68122c3f8f5367e44cb4c41_400x400.jpeg',
                followed: false,
                fullName: 'Taras',
                status: 'I am so pretty',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://pbs.twimg.com/profile_images/378800000098702098/8c576c71e68122c3f8f5367e44cb4c41_400x400.jpeg',
                followed: false,
                fullName: 'Maria',
                status: 'I am a BOSS',
                location: {city: 'Minsk', country: 'Belarus'}
            }],);
    }


    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={style.userPhoto} alt='avatar'/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
            }
        </div>)
}

export default Users