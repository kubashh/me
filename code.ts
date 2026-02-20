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
export const useConst = (value: any) => {
  return useState(value)[0]
}

// useRefresh
export const useRefresh = () => {
  const setState = useState(false)[1]
  return () => setState((prev) => !prev)
}

// useUrl
const getUrlSearch = () =>
  location.search.length > 1
    ? location.search
        .slice(1)
        .split(`&`)
        .map((element) => element.split(`=`))
    : []

const setUrl = (key: string, value: string) => {
  if (value.includes(`&`)) return console.error(`You can't give '&' to url`)

  let search = `?`
  for (const [keyLocation, valueLocation] of getUrlSearch()) {
    if (keyLocation !== key) {
      search += `${keyLocation}=${valueLocation}&`
    }
  }

  search += `${key}=${value}`

  history.pushState(null, `aaa`, search)
}

const getUrl = (key: string, value: string): string => {
  for (const [keyLocation, valueLocation] of getUrlSearch()) {
    if (keyLocation === key) return valueLocation
  }

  setUrl(key, value)

  return value
}

export const useUrl = (key: string, value: string) => {
  const refresh = useRefresh()

  const cb = (valueNew: string) => {
    if (valueNew === getUrl(key, value)) return
    setUrl(key, valueNew)

    refresh()
  }

  const arr: [string, (value: string) => void] = [getUrl(key, value), cb]

  return arr
}

// useClient
export function useClient() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [isClient])

  return isClient
}
