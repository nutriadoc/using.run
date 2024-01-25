import using, { Using } from "./main"

declare global {

  interface window {
    using: Using
  }

  export default using
}