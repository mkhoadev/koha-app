import { Circle, Defs, G, LinearGradient, Mask, Path, Stop, Svg } from "react-native-svg";

interface IconProps {
  color?: string;
}

export const HomeIcon = ({ color }: IconProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={24} fill="none">
    <Path
      fill={color || "#393939"}
      d="M7.751 21.62v-3.466c0-.885.723-1.602 1.615-1.602h3.258c.428 0 .839.169 1.141.469.303.3.473.708.473 1.133v3.467c-.003.367.143.721.404.982.26.261.616.408.987.408h2.223a3.923 3.923 0 0 0 2.77-1.133 3.866 3.866 0 0 0 1.148-2.747V9.256c0-.833-.372-1.623-1.015-2.157l-7.562-5.996a3.512 3.512 0 0 0-4.477.08L1.326 7.1A2.805 2.805 0 0 0 .229 9.256v9.866c0 2.148 1.755 3.89 3.919 3.89H6.32c.77 0 1.395-.617 1.401-1.381l.03-.01Z"
    />
  </Svg>
);

export const StatisticIcon = ({ color }: IconProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      fill={color || "#393939"}
      d="M17.294.686c3.855 0 6.032 2.186 6.043 6.042v10.59c0 3.854-2.188 6.042-6.043 6.042H6.706c-3.856 0-6.043-2.188-6.043-6.043V6.728C.663 2.872 2.85.686 6.706.686h10.588Zm-4.727 4.682a.953.953 0 0 0-1.452.895v11.553c.058.488.465.85.94.85a.937.937 0 0 0 .942-.85V6.263a.924.924 0 0 0-.43-.895ZM7.273 9.086a.933.933 0 0 0-.998 0 .953.953 0 0 0-.442.896v7.834c.044.488.452.85.94.85a.937.937 0 0 0 .94-.85V9.982a.955.955 0 0 0-.44-.896Zm10.497 4.116a.95.95 0 0 0-1.008 0 .914.914 0 0 0-.43.896v3.718c.044.488.451.85.94.85a.955.955 0 0 0 .941-.85v-3.718a.946.946 0 0 0-.443-.896Z"
    />
  </Svg>
);

export const HeathIcon = ({ color }: IconProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      fill={color || "#393939"}
      d="M16.195 3.616c-1.71 0-3.24.831-4.194 2.107a5.241 5.241 0 0 0-4.194-2.107c-2.9 0-5.252 2.362-5.252 5.28 0 1.124.18 2.163.49 3.127 1.493 4.723 6.093 7.547 8.37 8.322.321.113.85.113 1.171 0 2.277-.775 6.877-3.6 8.37-8.322.31-.963.49-2.002.49-3.127 0-2.918-2.352-5.28-5.252-5.28Z"
    />
  </Svg>
);

export const UserIcon = ({ color }: IconProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={24} fill="none">
    <Path
      fill={color || "#393939"}
      d="M10 15.621c4.92 0 9.07.8 9.07 3.883 0 3.085-4.178 3.856-9.07 3.856-4.917 0-9.07-.8-9.07-3.883 0-3.085 4.179-3.856 9.07-3.856ZM10 .686a5.978 5.978 0 0 1 6.002 5.998c0 3.33-2.67 6-6.002 6a5.98 5.98 0 0 1-6.001-6A5.98 5.98 0 0 1 10 .686Z"
    />
  </Svg>
);

export const SearchOutlineIcon = ({ color }: IconProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.167 16.667a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15ZM15.775 17.241c.442 1.334 1.45 1.467 2.225.3.708-1.066.242-1.941-1.042-1.941-.95-.008-1.483.733-1.183 1.641Z"
    />
  </Svg>
);

export const BellOutlineIcon = ({ color }: IconProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10.017 2.425c-2.759 0-5 2.242-5 5v2.408c0 .509-.217 1.284-.476 1.717l-.958 1.592c-.592.983-.183 2.075.9 2.441 3.592 1.2 7.467 1.2 11.058 0a1.669 1.669 0 0 0 .9-2.441l-.958-1.592c-.25-.433-.466-1.208-.466-1.717V7.425c0-2.75-2.25-5-5-5Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11.558 2.667a5.628 5.628 0 0 0-3.083 0 1.654 1.654 0 0 1 1.541-1.05c.7 0 1.3.433 1.542 1.05Z"
    />
    <Path
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.517 15.883c0 1.375-1.125 2.5-2.5 2.5a2.509 2.509 0 0 1-1.767-.733 2.509 2.509 0 0 1-.733-1.767"
    />
  </Svg>
);

export const CurrencyEthIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={33} height={34} fill="none">
    <Path
      fill="url(#a)"
      d="M32.91 17c0 9.065-7.347 16.413-16.412 16.413C7.433 33.413.085 26.066.085 17 .085 7.936 7.433.587 16.498.587 25.563.587 32.911 7.936 32.911 17Z"
    />
    <G fill="#000" opacity={0.8}>
      <Path d="m16.445 9.385-.101.344v9.999l.101.101 4.641-2.743-4.64-7.701Z" />
      <Path d="m16.445 9.385-4.641 7.7 4.641 2.744V9.385ZM16.445 21.34l-.057.069v3.562l.057.166 4.644-6.54-4.644 2.742Z" />
      <Path d="M16.445 25.138v-3.799l-4.641-2.742 4.641 6.54ZM16.445 19.83l4.642-2.744-4.642-2.11v4.853ZM11.804 17.086l4.64 2.743v-4.853l-4.64 2.11Z" />
    </G>
    <Defs>
      <LinearGradient id="a" x1={0} x2={33} y1={0.5} y2={33.5} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#8FFF00" />
        <Stop offset={1} stopOpacity={0.69} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const EthIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={6} height={10} fill="none">
    <Path fill="#8FFF00" d="M3 7.544 0 5.439 3 10l3-4.561-3 2.105Z" />
    <Path fill="#8FFF00" d="M3 0 0 5.088l3 1.93 3-1.93L3 0Z" />
  </Svg>
);

export const HeathOutlineIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none">
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.966}
      d="M7.362 12.14c-.198.07-.525.07-.723 0-1.692-.578-5.472-2.988-5.472-7.07A3.251 3.251 0 0 1 4.41 1.807c1.062 0 2.001.514 2.59 1.307a3.226 3.226 0 0 1 2.59-1.307 3.251 3.251 0 0 1 3.244 3.261c0 4.083-3.78 6.493-5.472 7.07Z"
    />
  </Svg>
);

export const ShareOutlineIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none">
    <Path fill="#000" stroke="#000" d="M9.852 3.654Z" />
    <Mask id="a" fill="#fff">
      <Path d="M2.036 7.653H1.99a.447.447 0 0 1-.391-.484 5.457 5.457 0 0 1 2.28-3.902.44.44 0 1 1 .508.717 4.577 4.577 0 0 0-1.92 3.279.432.432 0 0 1-.43.39Z" />
    </Mask>
    <Path
      fill="#000"
      d="M2.036 7.653H1.99a.447.447 0 0 1-.391-.484 5.457 5.457 0 0 1 2.28-3.902.44.44 0 1 1 .508.717 4.577 4.577 0 0 0-1.92 3.279.432.432 0 0 1-.43.39Z"
    />
    <Path
      fill="#000"
      d="m1.99 7.653-.121.993.06.007h.06v-1Zm-.391-.484-.995-.1v.003l.995.097Zm2.28-3.902-.576-.817-.003.001.58.816Zm.508.717.576.818-.576-.818Zm-1.92 3.279-.994-.102-.001.012-.001.01.997.08Zm-.43-.61H1.99v2H2.037v-2Zm.074.008a.553.553 0 0 1 .483.605l-1.99-.194a1.447 1.447 0 0 0 1.265 1.574l.242-1.985Zm.483.608a4.457 4.457 0 0 1 1.865-3.187L3.3 2.452A6.457 6.457 0 0 0 .604 7.068l1.99.2Zm1.862-3.185a.56.56 0 0 1-.78-.136l1.633-1.153a1.44 1.44 0 0 0-2.006-.345l1.153 1.634Zm-.78-.136a.56.56 0 0 1 .134-.78L4.964 4.8a1.44 1.44 0 0 0 .345-2.006L3.675 3.948Zm.135-.781A5.577 5.577 0 0 0 1.473 7.16l1.99.203a3.577 3.577 0 0 1 1.5-2.562L3.81 3.167Zm-2.34 4.017a.569.569 0 0 1 .565-.53v2c.717 0 1.368-.545 1.429-1.313L1.47 7.184Z"
      mask="url(#a)"
    />
    <Mask id="b" fill="#fff">
      <Path d="M7.035 13.19a5.435 5.435 0 0 1-2.456-.584.437.437 0 1 1 .397-.782 4.61 4.61 0 0 0 4.048.035.439.439 0 0 1 .584.204.439.439 0 0 1-.204.584 5.378 5.378 0 0 1-2.369.542Z" />
    </Mask>
    <Path
      fill="#000"
      d="M7.035 13.19a5.435 5.435 0 0 1-2.456-.584.437.437 0 1 1 .397-.782 4.61 4.61 0 0 0 4.048.035.439.439 0 0 1 .584.204.439.439 0 0 1-.204.584 5.378 5.378 0 0 1-2.369.542Z"
    />
    <Path
      fill="#000"
      d="m4.58 12.606-.457.89.01.004.446-.894Zm.396-.782-.457.89.007.003.45-.893Zm4.048.035.434.901.004-.002-.438-.899Zm.38.788.436.9.001-.001-.437-.9Zm-2.369-.458c-.705 0-1.374-.16-2.008-.478l-.895 1.79a6.436 6.436 0 0 0 2.903.688v-2Zm-1.999-.473c.265.136.388.47.24.758l-1.779-.914a1.438 1.438 0 0 0 .626 1.935l.913-1.779Zm.24.758a.562.562 0 0 1-.757.24l.914-1.78a1.438 1.438 0 0 0-1.936.626l1.78.913Zm-.75.243a5.61 5.61 0 0 0 4.932.043l-.867-1.802a3.61 3.61 0 0 1-3.164-.027l-.901 1.786Zm4.936.041a.561.561 0 0 1-.753-.257l1.798-.875a1.439 1.439 0 0 0-1.92-.666l.875 1.798Zm-.753-.257a.561.561 0 0 1 .257-.754l.875 1.799a1.439 1.439 0 0 0 .666-1.92l-1.798.875Zm.259-.754a4.376 4.376 0 0 1-1.933.442v2c.979 0 1.921-.214 2.805-.642l-.872-1.8Z"
      mask="url(#b)"
    />
    <Mask id="c" fill="#fff">
      <Path d="M7.035 4.923a2.059 2.059 0 1 1 0-4.117 2.059 2.059 0 0 1 0 4.117Zm0-3.237A1.185 1.185 0 1 0 8.219 2.87c0-.653-.537-1.184-1.184-1.184Z" />
    </Mask>
    <Path
      fill="#000"
      d="M7.035 4.923a2.059 2.059 0 1 1 0-4.117 2.059 2.059 0 0 1 0 4.117Zm0-3.237A1.185 1.185 0 1 0 8.219 2.87c0-.653-.537-1.184-1.184-1.184Z"
    />
    <Path
      fill="#000"
      d="M7.035 3.923c-.585 0-1.06-.474-1.06-1.059h-2c0 1.69 1.37 3.06 3.06 3.06v-2Zm-1.06-1.059c0-.585.475-1.059 1.06-1.059v-2c-1.69 0-3.06 1.37-3.06 3.06h2Zm1.06-1.059c.585 0 1.059.474 1.059 1.06h2c0-1.69-1.37-3.06-3.06-3.06v2Zm1.059 1.06c0 .583-.478 1.058-1.06 1.058v2a3.063 3.063 0 0 0 3.06-3.059h-2ZM7.034.684A2.185 2.185 0 0 0 4.852 2.87h2c0-.101.083-.184.184-.184v-2ZM4.852 2.87c0 1.206.978 2.184 2.184 2.184v-2a.185.185 0 0 1-.184-.184h-2Zm2.184 2.184A2.185 2.185 0 0 0 9.219 2.87h-2a.185.185 0 0 1-.184.184v2ZM9.219 2.87A2.189 2.189 0 0 0 7.035.686v2c.098 0 .184.086.184.184h2Z"
      mask="url(#c)"
    />
    <Mask id="d" fill="#fff">
      <Path d="M2.818 12.057a2.059 2.059 0 1 1 0-4.117 2.059 2.059 0 0 1 0 4.117Zm0-3.243a1.185 1.185 0 1 0 .002 2.37 1.185 1.185 0 0 0-.002-2.37Z" />
    </Mask>
    <Path
      fill="#000"
      d="M2.818 12.057a2.059 2.059 0 1 1 0-4.117 2.059 2.059 0 0 1 0 4.117Zm0-3.243a1.185 1.185 0 1 0 .002 2.37 1.185 1.185 0 0 0-.002-2.37Z"
    />
    <Path
      fill="#000"
      d="M4.002 9.998h-1 1Zm-1.184 1.06c-.585 0-1.06-.474-1.06-1.06h-2c0 1.69 1.37 3.06 3.06 3.06v-2Zm-1.06-1.06c0-.58.477-1.059 1.06-1.059v-2A3.063 3.063 0 0 0-.242 10h2Zm1.06-1.059c.585 0 1.06.474 1.06 1.06h2c0-1.69-1.37-3.06-3.06-3.06v2ZM3.878 10c0 .58-.477 1.058-1.06 1.058v2a3.063 3.063 0 0 0 3.06-3.059h-2Zm-1.06-2.185A2.185 2.185 0 0 0 .634 9.998h2c0-.1.083-.184.184-.184v-2ZM.634 9.998c0 1.206.978 2.184 2.184 2.184v-2a.185.185 0 0 1-.184-.184h-2Zm2.184 2.184a2.185 2.185 0 0 0 2.184-2.184h-2a.185.185 0 0 1-.184.184v2Zm2.184-2.184a2.185 2.185 0 0 0-2.184-2.184v2c.101 0 .184.083.184.184h2Z"
      mask="url(#d)"
    />
    <Mask id="e" fill="#fff">
      <Path d="M11.182 12.057a2.059 2.059 0 1 1 2.06-2.059 2.07 2.07 0 0 1-2.06 2.06Zm0-3.243a1.185 1.185 0 1 0 1.184 1.184 1.189 1.189 0 0 0-1.184-1.184Z" />
    </Mask>
    <Path
      fill="#000"
      d="M11.182 12.057a2.059 2.059 0 1 1 2.06-2.059 2.07 2.07 0 0 1-2.06 2.06Zm0-3.243a1.185 1.185 0 1 0 1.184 1.184 1.189 1.189 0 0 0-1.184-1.184Z"
    />
    <Path
      fill="#000"
      d="m13.241 9.998 1 .006v-.006h-1Zm-.875 0h1V9.99l-1 .01Zm-1.184 1.06c-.585 0-1.059-.474-1.059-1.06h-2c0 1.69 1.37 3.06 3.06 3.06v-2Zm-1.059-1.06c0-.58.476-1.059 1.06-1.059v-2A3.063 3.063 0 0 0 8.122 10h2Zm1.06-1.059c.584 0 1.058.474 1.058 1.06h2c0-1.69-1.369-3.06-3.059-3.06v2Zm1.058 1.054a1.07 1.07 0 0 1-1.059 1.064v2a3.07 3.07 0 0 0 3.06-3.053l-2-.01Zm-1.059-2.179a2.185 2.185 0 0 0-2.184 2.184h2c0-.1.083-.184.184-.184v-2ZM8.998 9.998c0 1.206.979 2.184 2.184 2.184v-2a.185.185 0 0 1-.184-.184h-2Zm2.184 2.184a2.185 2.185 0 0 0 2.184-2.184h-2a.185.185 0 0 1-.184.184v2Zm2.184-2.193a2.189 2.189 0 0 0-2.184-2.175v2c.093 0 .183.077.184.193l2-.018Z"
      mask="url(#e)"
    />
  </Svg>
);

export const ArrowLeftIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12l4 4M5 12l4-4"
    />
  </Svg>
);

export const ArrowLeftIcon2 = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
    <Path
      stroke="#081131"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M10 12.667 5.333 8 10 3.333"
    />
  </Svg>
);

export const OptionDotVerticalIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
    <Path
      stroke="#081131"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M8 3.333v.007M8 8v.007m0 4.66v.006M8 4a.667.667 0 1 1 0-1.333A.667.667 0 0 1 8 4Zm0 4.667a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334Zm0 4.666A.667.667 0 1 1 8 12a.667.667 0 0 1 0 1.333Z"
    />
  </Svg>
);

export const Gradient = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={318} height={551} fill="none">
    <G filter="url(#a)">
      <Circle cx={337.332} cy={213.925} r={115.075} fill="#8FFF00" />
    </G>
    <Defs></Defs>
  </Svg>
);

export const PlusMenuIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={83} height={83} fill="none">
    <G filter="url(#a)">
      <Circle cx={41.5} cy={38.5} r={31.5} fill="url(#b)" />
      <Path
        fill="#000"
        fillRule="evenodd"
        d="M41.5 26.996c.907 0 1.643.736 1.643 1.643v8.217h8.217a1.643 1.643 0 1 1 0 3.288h-8.217v8.217a1.643 1.643 0 1 1-3.287 0v-8.217h-8.217a1.643 1.643 0 1 1 0-3.288h8.217V28.64c0-.907.736-1.643 1.643-1.643Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={9.837}
        x2={73.171}
        y1={6.832}
        y2={70.166}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8FFF00" />
        <Stop offset={1} stopColor="#050A00" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const SettingWhiteIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M13.787 3.805c-.455-1.874-3.12-1.874-3.575 0A1.839 1.839 0 0 1 7.468 4.94c-1.646-1.003-3.53.881-2.527 2.527a1.839 1.839 0 0 1-1.136 2.744c-1.874.455-1.874 3.12 0 3.575A1.839 1.839 0 0 1 4.94 16.53c-1.003 1.647.881 3.53 2.527 2.528a1.839 1.839 0 0 1 2.744 1.136c.455 1.874 3.12 1.874 3.575 0a1.839 1.839 0 0 1 2.743-1.136c1.647 1.003 3.53-.881 2.528-2.528a1.839 1.839 0 0 1 1.136-2.744c1.874-.454 1.874-3.119 0-3.574a1.839 1.839 0 0 1-1.136-2.744c1.003-1.646-.881-3.53-2.528-2.527a1.839 1.839 0 0 1-2.744-1.136Zm-1.788 11.794a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z"
      clipRule="evenodd"
    />
  </Svg>
);
