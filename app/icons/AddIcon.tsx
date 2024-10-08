interface AddIconProps {
  width?: number;
  height?: number;
}

const AddIcon = ({ width = 24, height = 24 }: AddIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 18.75V12.75H5.25V11.25H11.25V5.25H12.75V11.25H18.75V12.75H12.75V18.75H11.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AddIcon;
