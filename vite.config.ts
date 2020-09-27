import type { UserConfig } from 'vite'
import path from 'path'
import svgPlugin from 'vite-plugin-svg'

const config: UserConfig = {
  alias: {
    '/@/': path.resolve(__dirname, './src'),
  },
  plugins: [svgPlugin()],
  optimizeDeps: {
    include: ['gsap/Draggable'],
  },
}

export default config
