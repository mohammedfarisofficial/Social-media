import Friend from '../Friend/Friend';
import './style.scss';
const Followers = () => {
  return (
    <div className='followers-container'>
      <div className="followers-title">
        <h3>Following</h3>
      </div>
      <div className="following-container">
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
      </div>
    </div>
  )
}

export default Followers