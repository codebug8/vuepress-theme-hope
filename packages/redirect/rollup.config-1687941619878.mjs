import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import MagicString from 'magic-string';

const hashBangRegex = /^\s*(#!.*)/;
const shebangPlugin = () => {
  const shebangMap = /* @__PURE__ */ new Map();
  return {
    name: "hash-bang",
    transform(code, id) {
      const match = hashBangRegex.exec(code);
      if (match) {
        const str = new MagicString(
          code
        );
        str.remove(match.index, match[1].length);
        shebangMap.set(id, match[1]);
        return { code: str.toString(), map: str.generateMap({ hires: true }) };
      }
      return null;
    },
    renderChunk(code, chunk) {
      if (chunk.isEntry) {
        const key = Array.from(shebangMap.keys()).find(
          (id) => {
            var _a;
            return (_a = chunk.facadeModuleId) == null ? void 0 : _a.includes(id);
          }
        );
        if (key) {
          const str = new MagicString(code);
          str.prepend(`${shebangMap.get(key)}
`);
          return {
            code: str.toString(),
            map: str.generateMap({ hires: true })
          };
        }
      }
      return null;
    }
  };
};

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const isProduction = process.env["NODE_ENV"] === "production";
const bundle = (filePath, {
  dts: enableDts = typeof filePath === "object" ? !filePath.base.startsWith("cli/") && filePath.base !== "cli" : !filePath.startsWith("cli/"),
  external = [],
  dtsExternal = [],
  resolve = false,
  copy: copyOptions = [],
  output = {},
  inlineDynamicImports = typeof filePath !== "object",
  preserveShebang = typeof filePath === "object" ? filePath.base.startsWith("cli") : filePath.startsWith("cli/"),
  alias: entries,
  replace: replaceOptions,
  moduleSideEffects = (id) => id.endsWith(".css") || id.endsWith(".scss")
} = {}) => [
  {
    input: typeof filePath === "object" ? Object.fromEntries(
      filePath.files.map((item) => [
        item,
        `./src/${filePath.base}/${item}.ts`
      ])
    ) : `./src/${filePath}.ts`,
    output: [
      __spreadValues(__spreadProps(__spreadValues({}, typeof filePath === "object" ? {
        dir: `./lib/${filePath.target || filePath.base}`,
        entryFileNames: "[name].js"
      } : { file: `./lib/${filePath}.js` }), {
        format: "esm",
        sourcemap: true,
        exports: "named",
        inlineDynamicImports
      }), output)
    ],
    plugins: [
      typeof replaceOptions === "object" ? replace(__spreadValues({
        preventAssignment: true
      }, replaceOptions)) : null,
      entries ? (
        // FIXME: This is an issue of ts NodeNext
        alias({
          entries
        })
      ) : null,
      preserveShebang ? shebangPlugin() : null,
      ...resolve ? [
        nodeResolve({ preferBuiltins: true }),
        // FIXME: This is an issue of ts NodeNext
        commonjs()
      ] : [],
      // FIXME: This is an issue of ts NodeNext
      esbuild({
        charset: "utf8",
        minify: isProduction,
        target: "node16"
      }),
      copyOptions.length ? (
        // FIXME: This is an issue of ts NodeNext
        copy({
          targets: copyOptions.map(
            (item) => typeof item === "string" ? { src: `./src/${item}`, dest: `./lib/${item}` } : { src: `./src/${item[0]}`, dest: `./lib/${item[1]}` }
          )
        })
      ) : null
    ],
    external: [
      ...resolve ? [] : (typeof filePath === "object" ? filePath.base.startsWith("client") : filePath.startsWith("client/")) ? [
        /^@temp/,
        "@vueuse/core",
        "@vuepress/client",
        "@vuepress/shared",
        "vue",
        "vue-router",
        "vuepress-shared/client",
        /\.s?css(?:\?module)?$/
      ] : (typeof filePath === "object" ? filePath.base.startsWith("node") || filePath.base.startsWith("cli") : filePath.startsWith("node/") || filePath.startsWith("cli/")) ? [
        /^node:/,
        "@vuepress/core",
        "@vuepress/shared",
        /^@vuepress\/plugin-/,
        "@vuepress/utils",
        /^vuepress-plugin-/,
        "vuepress-shared/node"
      ] : [],
      ...external
    ],
    treeshake: {
      moduleSideEffects,
      preset: "smallest"
    }
  },
  ...enableDts ? [
    {
      input: typeof filePath === "object" ? Object.fromEntries(
        filePath.files.map((item) => [
          item,
          `./src/${filePath.base}/${item}.ts`
        ])
      ) : `./src/${filePath}.ts`,
      output: [
        __spreadProps(__spreadValues({}, typeof filePath === "object" ? {
          dir: `./lib/${filePath.target || filePath.base}`,
          entryFileNames: "[name].d.ts"
        } : { file: `./lib/${filePath}.d.ts` }), {
          format: "esm"
        })
      ],
      plugins: [
        entries ? (
          // FIXME: This is an issue of ts NodeNext
          alias({
            entries
          })
        ) : null,
        dts({
          compilerOptions: {
            preserveSymlinks: false
          }
        })
      ],
      external: [
        ...resolve ? [] : (typeof filePath === "object" ? filePath.base.startsWith("client") : filePath.startsWith("client/")) ? [/^@temp/, "vuepress-shared/client", /\.s?css$/] : (typeof filePath === "object" ? filePath.base.startsWith("node") : filePath.startsWith("node/")) ? [/^node:/, "vuepress-shared/node"] : [],
        ...dtsExternal
      ]
    }
  ] : []
];

var rollup_config = [
  ...bundle("cli/index", {
    external: ["@vuepress/cli", "cac"]
  }),
  ...bundle(
    {
      base: "client",
      files: ["config"]
    },
    {
      copy: [["client/styles", "client"]]
    }
  ),
  ...bundle("node/index")
];

export { rollup_config as default };
