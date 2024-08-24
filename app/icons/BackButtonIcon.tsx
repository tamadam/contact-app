interface BackButtonIconProps {
  width?: number;
  height?: number;
}

const BackButtonIcon = ({ width = 24, height = 24 }: BackButtonIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 19.625L4.375 12L12 4.375L13.075 5.45L7.25 11.25H19.625V12.75H7.25L13.075 18.55L12 19.625Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BackButtonIcon;
