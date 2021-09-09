const LikeCounter = (count:number) => {
    if (count > 0){
        return (
            <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-300'>{count} คน</p>
            </div>
        )
    }
}

export default LikeCounter