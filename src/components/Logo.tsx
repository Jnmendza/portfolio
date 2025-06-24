interface LogoProps {
  color?: string;
  size: number; // interpret this as pixels
  className?: string;
}

const Logo = ({ color = "#364153", size, className }: LogoProps) => {
  return (
    <svg
      viewBox='0 0 428.662 481.82'
      width={size}
      height={size}
      aria-label='Jonathan Mendoza'
      fill={color}
      className={className}
      style={{ display: "block" }} // avoids unwanted gaps in some email clients
    >
      <polygon points='428.662 .002 428.662 239.826 348.183 170.016 348.183 131.406 323.536 148.628 262.815 96.09 339.907 0 428.662 .002' />
      <polygon points='412.181 309.636 214.326 481.82 212.104 479.937 18.101 309.636 79.415 256.389 214.326 372.926 287.413 308.039 82.116 131.406 82.116 170.016 3.267 239.019 0 241.944 .007 237.356 .007 2.472 0 0 2.476 .002 58.308 .002 412.181 309.636' />
    </svg>
  );
};

export default Logo;
