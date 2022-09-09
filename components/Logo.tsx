export default function Logo({ ...rest }) {
  return (
     <Image
      loader={myLoader}
      src="https://img.dinamalar.com/images/dmrenglishlogonew.png"
      alt="Picture of the author"
      width={200}
      height={51}
    />
  );
}
