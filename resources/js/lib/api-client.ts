import axios from 'axios'
import { API_BASE_URL, USER_KEY } from './constants'
import { LOGIN_ROUTE } from '@/app/routes'

const snakeToCamel = (str: string): string =>
  str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''))

const camelToSnake = (str: string): string =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)

const isObject = (obj: any): boolean => obj !== null && typeof obj === 'object'

const convertKeys = (obj: any, converter: (key: string) => string): any => {
  if (!isObject(obj)) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeys(item, converter))
  }

  const newObj: any = {}

  Object.keys(obj).forEach((key) => {
    const newKey = converter(key)
    newObj[newKey] = isObject(obj[key]) ? convertKeys(obj[key], converter) : obj[key]
  })

  return newObj
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.data) {
      config.data = convertKeys(config.data, camelToSnake)
    }
    if (config.params) {
      config.params = convertKeys(config.params, camelToSnake)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.defaults.withCredentials = true
axiosInstance.defaults.withXSRFToken = true

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data) {
      response.data = convertKeys(response.data, snakeToCamel)
    }
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(USER_KEY)
      const searchParams = new URLSearchParams()
      const redirectTo = searchParams.get('redirectTo')
      window.location.href = `${LOGIN_ROUTE}?redirectTo=${redirectTo}`
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
