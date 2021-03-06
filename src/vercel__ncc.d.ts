declare module '@vercel/ncc' {
  type Asset = { source: Buffer; permissions: number; };
  export type CompiledOutput = { code: string; assets?: { [key: string]: Asset }; map?: string };
  type CompilerOptions = { minify?: boolean; externals?: string[]; sourceMap?: boolean };
  export default function(inputFilePath: string, options: CompilerOptions): CompiledOutput;
}
