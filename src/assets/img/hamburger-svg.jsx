export default function HamburgerSvg() {
  return (
    <svg
      className="hamburger-mobile"
      viewBox="0 0 100 80"
      width="32"
      height="32"
    >
      <rect width="100" height="15" rx="10"></rect>
      <rect y="30" width="100" height="15" rx="10"></rect>
      <rect y="60" width="100" height="15" rx="10"></rect>
    </svg>
  );
}
