export default function QuotesVector({ quoteClass }) {
  return (
    <div className={quoteClass}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="10"
        viewBox="0 0 11 10"
        fill="none"
      >
        <path
          d="M11 5C11 7.76142 8.76142 10 6 10V10L6 0V0C8.76142 0 11 2.23858 11 5V5Z"
          fill="#E34234"
        />
        <path
          d="M5 5C5 7.76142 2.76142 10 0 10V10L0 0V0C2.76142 0 5 2.23858 5 5V5Z"
          fill="#E34234"
        />
      </svg>
    </div>
  );
}
