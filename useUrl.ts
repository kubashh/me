import { useRefresh } from "wdwh/hooks";

// useUrl
export function useUrl(key: string, value: string) {
  const refresh = useRefresh();

  const cb = (valueNew: string) => {
    if (valueNew === getUrl(key, value)) return;
    setUrl(key, valueNew);

    refresh();
  };

  const arr: [string, (value: string) => void] = [getUrl(key, value), cb];

  return arr;
}

function getUrl(key: string, value: string): string {
  for (const [keyLocation, valueLocation] of getUrlSearch()) {
    if (keyLocation === key) return valueLocation!;
  }

  setUrl(key, value);

  return value;
}

function setUrl(key: string, value: string) {
  if (value.includes(`&`)) return console.error(`You can't give '&' to url`);

  let search = `?`;
  for (const [keyLocation, valueLocation] of getUrlSearch()) {
    if (keyLocation !== key) {
      search += `${keyLocation}=${valueLocation}&`;
    }
  }

  search += `${key}=${value}`;

  history.pushState(null, `aaa`, search);
}

function getUrlSearch() {
  return location.search.length > 1
    ? location.search
        .slice(1)
        .split(`&`)
        .map((element) => element.split(`=`))
    : [];
}
