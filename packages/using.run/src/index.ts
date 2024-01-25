export interface Using {
  (name: string): any
}

const cdn = 'https://www.unpkg.com/'

async function loadScript(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = () => {
      resolve()
    }
    script.onerror = () => {
      reject()
    }
    document.head.appendChild(script)
  })
}

export async function loadModule(name: string): Promise<any> {
  const pkg = await fetchPackage(name)
  const latest = latestVersion(pkg)
  const version = pkg.versions[latest]
  const module = version.module
  const main = version.main
  let dist = !!main ? main : module
  dist = dist.startsWith("./") ? dist.substring(2) : dist

  let url = cdn + name + '@' + latest + '/' + dist
  await loadScript(url)
}

export function latestVersion(pkg: any) {
  return pkg["dist-tags"].latest
}

export async function fetchPackage(name: string) {
  const response = await fetch(
    "https://registry.npmjs.com/" + name,
    {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
      cache: "default",
    }
  )

  return await response.json()
}

export default async function using(name: string): Promise<any> {
  await loadModule(name)

  return (window as any)[name]
}

const anyWindow = window as any
anyWindow.using = using