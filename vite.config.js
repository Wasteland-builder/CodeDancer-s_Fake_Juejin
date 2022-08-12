import { defineConfig } from 'vite'
import svgSprites from 'rollup-plugin-svg-sprites'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  plugins: [vue(), 
            svgLoader(),
            svgSprites({
              vueComponent: true,
               exclude: ['node_modules/**']
            }),
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,"src")
    }
}
})
