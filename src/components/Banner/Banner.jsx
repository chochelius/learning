import banner from '../../assets/banner.gif'

const Banner = () => {
  return (
    <div className='container-fluid position-relative'>
    <div className="row">
        <div className="col-8 mx-auto mt-5">
        <img src={banner} alt="banner Tu primera página web" className='img-fluid' />
        </div>
    </div>
    </div>
    
  )
}

export default Banner