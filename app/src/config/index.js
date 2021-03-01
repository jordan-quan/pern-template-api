const env = process.env.APP_ENV || 'development'
export default async () => {
  const configObject = await import(`./${env}`)
  return configObject.default
}
