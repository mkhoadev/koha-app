import { Path, Svg } from "react-native-svg";

export const LeftArrowWhiteIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={10} fill="none">
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 5h14M1 5l4 4M1 5l4-4"
    />
  </Svg>
);

export const EmailOutlineIcon = ({ color }: { color?: string }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={20} fill="none">
    <Path
      stroke={color || "#64748B"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.902 6.851-4.443 3.613c-.84.666-2.02.666-2.86 0l-4.48-3.613"
    />
    <Path
      stroke={color || "#64748B"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.909 19C18.95 19.008 21 16.51 21 13.438V6.57C21 3.499 18.95 1 15.909 1H6.09C3.05 1 1 3.499 1 6.57v6.868C1 16.51 3.05 19.008 6.091 19h9.818Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const PasswordOutlineIcon = ({ color }: { color?: string }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={20} fill="none">
    <Path
      stroke={color || "#64748B"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 9H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z"
    />
    <Path
      stroke={color || "#64748B"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <Path
      stroke={color || "#64748B"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 9V5a4 4 0 0 1 8 0v4"
    />
  </Svg>
);

export const EyeOutlineIcon = ({ color }: { color?: string }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={20} fill="none">
    <Path
      stroke={color || "#64748B"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2 1 18 18M9.584 8.587a2 2 0 1 0 2.829 2.83"
    />
    <Path
      stroke={color || "#64748B"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.363 3.365A9.466 9.466 0 0 1 11 3c4 0 7.333 2.333 10 7-.778 1.361-1.612 2.524-2.503 3.488m-2.14 1.861C14.726 16.45 12.942 17 11 17c-4 0-7.333-2.333-10-7 1.369-2.395 2.913-4.175 4.632-5.34"
    />
  </Svg>
);

export const UserOutlineIcon = ({ color }: { color?: string }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={20} fill="none">
    <Path
      stroke={color || "#64748B"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM1 19v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
    />
  </Svg>
);

export const AppleIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none">
    <Path
      fill="#000"
      d="M37.5 20c0 9.66-7.831 17.5-17.5 17.5S2.5 29.66 2.5 20c0-9.669 7.831-17.5 17.5-17.5S37.5 10.331 37.5 20Z"
    />
    <Path
      fill="#fff"
      d="M28.203 15.572c-.096.055-2.37 1.231-2.37 3.838.108 2.973 2.87 4.015 2.917 4.015-.047.056-.417 1.42-1.512 2.85-.868 1.233-1.833 2.475-3.297 2.475-1.393 0-1.893-.821-3.5-.821-1.726 0-2.214.821-3.536.821-1.464 0-2.5-1.309-3.416-2.53-1.19-1.597-2.202-4.104-2.238-6.51-.024-1.276.239-2.53.905-3.595.94-1.487 2.619-2.496 4.452-2.53 1.404-.043 2.654.9 3.511.9.822 0 2.358-.9 4.095-.9.75.001 2.75.212 3.989 1.987ZM20 13.332c-.25-1.166.44-2.33 1.083-3.074.821-.898 2.119-1.508 3.237-1.508.072 1.165-.38 2.307-1.19 3.14-.726.898-1.976 1.574-3.13 1.441Z"
    />
  </Svg>
);

export const GoogleIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      fill="#F65536"
      d="M22.502 12.233c0-.863-.072-1.493-.227-2.147h-10.06v3.897h5.905c-.119.968-.761 2.427-2.19 3.407l-.02.13 3.18 2.415.221.021c2.024-1.831 3.19-4.526 3.19-7.723Z"
    />
    <Path
      fill="#34A853"
      d="M12.215 22.5c2.893 0 5.321-.933 7.095-2.543l-3.38-2.567c-.905.618-2.12 1.05-3.715 1.05a6.438 6.438 0 0 1-6.095-4.363l-.126.01-3.307 2.509-.043.117c1.761 3.43 5.38 5.787 9.571 5.787Z"
    />
    <Path
      fill="#FBBC05"
      d="M6.12 14.077A6.348 6.348 0 0 1 5.763 12c0-.723.13-1.423.345-2.077l-.006-.139-3.349-2.548-.11.05A10.339 10.339 0 0 0 1.502 12c0 1.692.417 3.29 1.143 4.713l3.476-2.636Z"
    />
    <Path
      fill="#EB4335"
      d="M12.215 5.56c2.012 0 3.369.852 4.143 1.563l3.024-2.893c-1.857-1.692-4.274-2.73-7.167-2.73-4.19 0-7.81 2.357-9.571 5.787l3.464 2.636a6.465 6.465 0 0 1 6.107-4.363Z"
    />
  </Svg>
);
