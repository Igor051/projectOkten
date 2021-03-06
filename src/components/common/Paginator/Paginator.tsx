import React, {useState} from "react";
import style from './Paginator.module.css'
import cn from 'classnames'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    portionSize?: number
}

function Paginator({portionSize = 10, ...props}: PropsType) {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (<div className={style.paginator}>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }
            }>
                Prev </button>}
            < div
                className={style.pages}>
                {
                    pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => {
                            return <span className={cn({
                                    [style.selectedPage]: props.currentPage === p
                                },
                                style.pageNumber
                            )
                            }
                                         onClick={() => {
                                             props.onPageChanged(p)
                                         }
                                         }>
                    {
                        p
                    }
                    </span>
                        })
                }
            </div>
            {
                portionCount > portionNumber && <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }
                }>
                    Next </button>}
        </div>
    )
}

export default Paginator