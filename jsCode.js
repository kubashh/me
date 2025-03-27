// Best hook I ever made, replaced by css by performence
export const useHover = () => {
  const [isHover, setIsHover] = useState(false)
  return [
    isHover,
    {
      onMouseEnter: () => setIsHover(true),
      onMouseLeave: () => setIsHover(false),
    },
  ]
}


// useConst
export const useConst = (value) => {
  return useState(value)[0]
}
