declare global {
    namespace NodeJS {
        interface ProcessEnv {
            /** envs */
        }
    }
}
  
declare module "*.svg" {
    const svg: string;
    export default svg;
}

export {}

