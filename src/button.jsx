function Button({onClick, children}) {
   const handleOnClick = () => {
      onClick("Hey clicked");
   }

    return (
        <button onClick={handleOnClick}>{children}</button>
    )
}

export { Button };