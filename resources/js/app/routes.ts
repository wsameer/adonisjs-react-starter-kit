export const BASE_ROUTE = '/'
export const APP_ROUTE = BASE_ROUTE + 'app'

export const AUTH_ROUTE = 'auth'
export const REGISTER_ROUTE = BASE_ROUTE + AUTH_ROUTE + '/register'
export const LOGIN_ROUTE = BASE_ROUTE + AUTH_ROUTE + '/login'
export const FORGOT_PASSWORD = BASE_ROUTE + AUTH_ROUTE + '/forgot-password'

export const DASHBOARD_ROUTE = APP_ROUTE

export const TRANSACTIONS_ROUTE = APP_ROUTE + '/transactions'

export const ACCOUNTS_ROUTE = APP_ROUTE + '/accounts'

export const SETTINGS_ROUTE = APP_ROUTE + '/settings'
export const EXPENSE_CATEGORY_SETTINGS_ROUTE = SETTINGS_ROUTE + '/expense-categories'
export const INCOME_CATEGORY_SETTINGS_ROUTE = SETTINGS_ROUTE + '/income-categories'
export const DATA_SETTINGS_ROUTE = SETTINGS_ROUTE + '/data'
export const ACCOUNT_SETTINGS_ROUTE = SETTINGS_ROUTE + '/accounts'

export const USER_PROFILE_ROUTE = SETTINGS_ROUTE + '/users/me'
