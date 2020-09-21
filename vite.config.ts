import type { UserConfig } from 'vite'
import path from 'path'
import svgPlugin from 'vite-plugin-svg'

const config: UserConfig = {
  alias: {
    '/@/': path.resolve(__dirname, './src'),
  },
  plugins: [svgPlugin()],
}

export default config
