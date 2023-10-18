export const apps = [
  {
    name: 'website',
    port: '7001',
    exec_mode: 'cluster',
    instances: 'max',
    script: './.output/server/index.mjs',
  },
]
