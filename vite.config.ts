import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers:[ElementPlusResolver()]
        })
    ],

    /* 配置扩展名及@别名 */
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },

    /* 配置开发环境端口号及跨域处理 */
    server: {
        port: 3333,
        proxy: { '/^api': '在这里输入接口的baseURL' }
    }
})
