import { CommentType, comments } from '../data/comments'
import { useState } from 'react'
import Reply from './Reply'
import LikeCounter from './LikeCounter'


const Comment = () => {
    const [comment, setComment] = useState<CommentType[]>([])
    const [data, setData] = useState<string[]>()


    return (
        <div className="">

            {/* normal comment */}
            <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src="/profileImages/lisa.jpg"></img>
                <div className="bg-gray-500 rounded-lg p-2">
                    <p className="font-semibold text-white"></p>
                    <p className='text-white'>ตัวอย่าง Template จ้า</p>
                    {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                    {LikeCounter(comments[1].likeNum)}
                </div>
            </div>

            {/* replies */}
            <Reply />
        </div>
    )
}

export default Comment