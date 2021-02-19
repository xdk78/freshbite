import type { UserConfig } from 'vite'
import path from 'path'
import svgPlugin from 'vite-plugin-vue-svg'
import vue from '@vitejs/plugin-vue'

const config: UserConfig = {
  resolve: { alias: { '/@': path.resolve(__dirname, './src') } },
  plugins: [vue(), svgPlugin()],
}

export default config
