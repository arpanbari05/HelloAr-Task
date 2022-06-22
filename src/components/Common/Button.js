function Button({ onClick, children, classes, styledCss, props }) {
  return (
    <button
      onClick={onClick}
      css={styledCss}
      className={`px-10 py-2 rounded-full bg-primary uppercase text-white font-medium hover:shadow-md ${classes}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;