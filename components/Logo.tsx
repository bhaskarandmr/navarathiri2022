import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://img.dinamalar.com/images/dmrenglishlogonew.png`
}

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="me.png"
      alt="Picture of the author"
      width={200}
      height={51}
    />
  )
}
