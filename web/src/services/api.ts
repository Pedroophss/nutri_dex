const baseApi = "something"

export default async function api<T>(route: string): Promise<T>{
    return await fetch(`${baseApi}/${route}`)
        .then(async r => {
            if (!r.ok) {
                throw new Error(r.statusText);
            }

            return await r.json() as T;                
        })
}