import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import {closeMenu} from "../utils/appSclice"
import CommentContainer from './CommentContainer';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[dispatch]);

  return (
    <div className='px-5 flex-col'>
        <iframe width="1200" height="600" src={"https://www.youtube.com/embed/" + searchParams.get('v')} 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        <CommentContainer/>
    </div>
  )
}

export default WatchPage