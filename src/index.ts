import Bake from './bake'

const [,, entryPoint]: string[] = process.argv
Bake.run(entryPoint)
