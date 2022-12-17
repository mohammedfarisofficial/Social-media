import './style.scss'

const Sponsored = () => {
  const imageURL =
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80";
  
  return (
    <div className='sponsored-container'>
      <div className="title-container">
        <h2>Sponsored</h2>
        <p>Create Ad</p>
      </div>
      <div className="image-container">
        <img src={imageURL} alt="" />
      </div>
      <div className="text-container"></div>
    </div>
  )
}

export default Sponsored