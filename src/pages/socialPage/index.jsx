import s from './styles.module.scss'
import images from 'images'

const linkData = [
  {
    field: 'REVIEWS',
    link: 'https://www.google.com/search?q=Bansal+Nursing+Home+%26+Leproscopy+Center&rlz=1C1CHBF_enIN919IN919&oq=Bansal+Nursing+Home+%26+Leproscopy+Center&aqs=chrome..69i57j0i22i30j0i390i650l3j69i61j69i60.828j0j15&sourceid=chrome&ie=UTF-8# ',
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
