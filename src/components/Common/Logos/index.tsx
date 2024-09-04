import Image from "next/image";

type Props = {
  size?: number;
};

const Logo: React.FC<Props> = ({ size = 118 }) => {
  return <Image src="/svgs/whoscore-icon.svg" alt="WhoScore logo" width={size} height={size} />;
};

export default Logo;
