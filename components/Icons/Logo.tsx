import logoImage from './logo.jpeg';
export default function Logo() {
  return (
    <img 
      alt="avatar" 
      loading="lazy" 
      width="100" 
      height="100" 
      decoding="async"
      data-nimg="1" 
      className="rounded-full z-10" 
      src={logoImage}
    />
  );
}
