import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    totalUsersCount: number
    portionSize: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export default function Users(props: PropsType) {
    return <div>
        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}/>
        <div>
            {props.users.map(u => <User key={u.id} followingInProgress={props.followingInProgress} follow={props.follow}
                                        user={u} unfollow={props.unfollow}/>)
            }
        </div>
    </div>

}