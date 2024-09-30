import type { App, Plugin } from "vue";
import { each } from "lodash-es";
type SFCWithInstall<T> = T & Plugin;
export function makeInstaller(componets: Plugin[]){
    const installer = (app:App) => each(componets,(c) =>app.use(c))
    return installer as Plugin
}
export const withInstall = <T>(componet: T) => {
    (componet as SFCWithInstall<T>).install = (app:App) =>{
        const name = (componet as any).name
        app.component(name,componet as Plugin)
    }
    return componet as SFCWithInstall<T>
}