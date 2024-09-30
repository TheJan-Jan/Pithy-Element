import { makeInstaller } from "@pithy-element/utils";
import components from "./components";
import "@pithy-element/theme/index.css"

const installer = makeInstaller(components)

export * from '@pithy-element/components'
export default installer
