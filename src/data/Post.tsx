import Comment from './Comment'
import {CommentType, comments} from './comments'
import LikeCounter from './LikeCounter'



function Post() {
    const data = comments

    return (

        <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">

            {/* ส่วนของเจ้าของ post */}
            <div className="space-y-2">

                {/* image and name */}
                <div className="flex space-x-2 items-center">
                    <img className="w-12 h-12 rounded-full" src="../logo.svg"></img>
                    <span className='font-semibold text-lg text-white'>Saharit Kadkasem 630610767</span>
                </div>

                {/* status message */}
                <p className='text-white'>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</p>

                {/* like section */}
                {LikeCounter(100)}

            </div>

            
            <Comment/>

        </div>

    )
}

export default Post