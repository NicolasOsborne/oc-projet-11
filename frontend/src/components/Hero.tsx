import Banner from '../assets/bank-tree.webp'

const Hero = () => {
  return (
    <div className='hero' style={{ backgroundImage: `url('${Banner}')` }}>
      <section className='hero-content'>
        <p className='subtitle'>No fees.</p>
        <p className='subtitle'>No minimum deposit.</p>
        <p className='subtitle'>High interest rates.</p>
        <p className='text'>Open a savings account with Argent Bank today!</p>
        <h2 className='sr-only'>Promoted Content</h2>
      </section>
    </div>
  )
}

export default Hero
