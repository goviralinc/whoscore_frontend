type Props = {
  width?: number;
  height?: number;
} & React.SVGProps<SVGSVGElement>;

const UserProfIcon = ({ height = 24, width = 24, color = "#424242", ...rest }: Props) => {
  return (
    <svg width={width} height={height} {...rest} viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6425 1.5H6.3575C3.6275 1.5 2 3.1275 2 5.8575V12.1425C2 14.25 2.9675 15.6975 4.67 16.245C5.165 16.4175 5.735 16.5 6.3575 16.5H12.6425C13.265 16.5 13.835 16.4175 14.33 16.245C16.0325 15.6975 17 14.25 17 12.1425V5.8575C17 3.1275 15.3725 1.5 12.6425 1.5ZM15.875 12.1425C15.875 13.7475 15.245 14.76 13.9775 15.18C13.25 13.7475 11.525 12.7275 9.5 12.7275C7.475 12.7275 5.7575 13.74 5.0225 15.18H5.015C3.7625 14.775 3.125 13.755 3.125 12.15V5.8575C3.125 3.7425 4.2425 2.625 6.3575 2.625H12.6425C14.7575 2.625 15.875 3.7425 15.875 5.8575V12.1425Z"
        fill={color}
      />
      <path
        d="M9.49994 6C8.01494 6 6.81494 7.2 6.81494 8.685C6.81494 10.17 8.01494 11.3775 9.49994 11.3775C10.9849 11.3775 12.1849 10.17 12.1849 8.685C12.1849 7.2 10.9849 6 9.49994 6Z"
        fill={color}
      />
    </svg>
  );
};

export default UserProfIcon;
