import type { UserConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

const config: UserConfig = {
  resolve: { alias: { '/@': path.resolve(__dirname, './src') } },
  plugins: [vue(), svgLoader()],
}

export default config
