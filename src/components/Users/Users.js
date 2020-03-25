import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

function Users(props) {
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

export default Users