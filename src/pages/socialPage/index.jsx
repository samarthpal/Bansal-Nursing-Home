import s from './styles.module.scss'
import images from 'images'

const linkData = [
  {
    field: 'REVIEWS',
    link: '/',
    image: images.review
  },
  {
    field: 'INSTAGRAM',
    link: 'https://instagram.com/bansalnursinghome?igshid=MzRlODBiNWFlZA==',
    image: images.instagram
  },
  {
    field: 'FACEBOOK',
    link: 'https://www.facebook.com/profile.php?id=100094448633050&mibextid=MKOS29',
    image: images.facebook
  }
]

export default function Main() {
  return (
    <div className={s.main}>
      <div className={s.inner}>
        <div className={s.logo}>
          <img src={images.logo1} alt='' />
        </div>
        <div className={s.title}>Click Here For</div>
        <div className={s.links}>
          {linkData.map(({ field, link, image }, i) => (
            <a href={link} key={i} className={s.link} target='_blank' rel='noreferrer'>
              <div>
                <img src={image} alt='' />
              </div>
              <div>{field}</div>
            </a>
          ))}
        </div>
        <div className={s.bottom}>
          <div className={s.left}>
            <img src={images.lightning} alt='' />
          </div>
          <div className={s.right}>
            <img src={images.lightning} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
