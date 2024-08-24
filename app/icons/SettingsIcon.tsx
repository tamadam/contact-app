interface SettingsIconProps {
  width?: number;
  height?: number;
}

const SettingsIcon = ({ width = 24, height = 24 }: SettingsIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.7001 21.5L9.3001 18.45C9.03343 18.3667 8.76276 18.2417 8.4881 18.075C8.21277 17.9083 7.95843 17.7333 7.7251 17.55L4.9001 18.75L2.6001 14.75L5.0501 12.9C5.01676 12.75 4.9961 12.6 4.9881 12.45C4.97943 12.3 4.9751 12.15 4.9751 12C4.9751 11.8667 4.97943 11.725 4.9881 11.575C4.9961 11.425 5.01676 11.2667 5.0501 11.1L2.6001 9.25L4.9001 5.275L7.7251 6.45C7.95843 6.26667 8.21277 6.096 8.4881 5.938C8.76276 5.77933 9.03343 5.65 9.3001 5.55L9.7001 2.5H14.3001L14.7001 5.55C15.0001 5.66667 15.2708 5.79567 15.5121 5.937C15.7541 6.079 16.0001 6.25 16.2501 6.45L19.1001 5.275L21.4001 9.25L18.9251 11.125C18.9584 11.2917 18.9751 11.4417 18.9751 11.575C18.9751 11.7083 18.9751 11.85 18.9751 12C18.9751 12.1333 18.9708 12.2707 18.9621 12.412C18.9541 12.554 18.9334 12.7167 18.9001 12.9L21.3501 14.75L19.0501 18.75L16.2501 17.55C16.0001 17.75 15.7461 17.925 15.4881 18.075C15.2294 18.225 14.9668 18.35 14.7001 18.45L14.3001 21.5H9.7001ZM12.0001 15C12.8334 15 13.5418 14.7083 14.1251 14.125C14.7084 13.5417 15.0001 12.8333 15.0001 12C15.0001 11.1667 14.7084 10.4583 14.1251 9.875C13.5418 9.29167 12.8334 9 12.0001 9C11.1668 9 10.4584 9.29167 9.8751 9.875C9.29177 10.4583 9.0001 11.1667 9.0001 12C9.0001 12.8333 9.29177 13.5417 9.8751 14.125C10.4584 14.7083 11.1668 15 12.0001 15ZM12.0001 13.5C11.5834 13.5 11.2294 13.354 10.9381 13.062C10.6461 12.7707 10.5001 12.4167 10.5001 12C10.5001 11.5833 10.6461 11.2293 10.9381 10.938C11.2294 10.646 11.5834 10.5 12.0001 10.5C12.4168 10.5 12.7708 10.646 13.0621 10.938C13.3541 11.2293 13.5001 11.5833 13.5001 12C13.5001 12.4167 13.3541 12.7707 13.0621 13.062C12.7708 13.354 12.4168 13.5 12.0001 13.5ZM11.0001 20H12.9751L13.3251 17.325C13.8418 17.1917 14.3084 17 14.7251 16.75C15.1418 16.5 15.5501 16.1833 15.9501 15.8L18.4251 16.85L19.4251 15.15L17.2501 13.525C17.3334 13.2583 17.3878 13 17.4131 12.75C17.4378 12.5 17.4501 12.25 17.4501 12C17.4501 11.7333 17.4378 11.4793 17.4131 11.238C17.3878 10.996 17.3334 10.75 17.2501 10.5L19.4251 8.85L18.4501 7.15L15.9251 8.2C15.5918 7.85 15.1918 7.53733 14.7251 7.262C14.2584 6.98733 13.7918 6.79167 13.3251 6.675L13.0001 4H11.0251L10.6751 6.675C10.1751 6.79167 9.70843 6.975 9.2751 7.225C8.84176 7.475 8.4251 7.79167 8.0251 8.175L5.5501 7.15L4.5751 8.85L6.7251 10.45C6.64176 10.7 6.58343 10.95 6.5501 11.2C6.51677 11.45 6.5001 11.7167 6.5001 12C6.5001 12.2667 6.51677 12.525 6.5501 12.775C6.58343 13.025 6.64176 13.275 6.7251 13.525L4.5751 15.15L5.5501 16.85L8.0251 15.8C8.40843 16.1833 8.81677 16.5 9.2501 16.75C9.68343 17 10.1584 17.1917 10.6751 17.325L11.0001 20Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SettingsIcon;
