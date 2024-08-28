import React from 'react'

function Cards({item}) {
    console.log(item)
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card card-compact bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}
    <div className="badge badge-secondary bg-red-300 text-black border-white">Free</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
    <div className="badge badge-outline">${item.price}</div>
    <button className="btn px-2 py-1 mb-2 bg-red-500 text-white hover:bg-red-600 btn-error">Buy now</button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
