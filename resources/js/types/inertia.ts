// import the augmeted SharedProps from teh module declaration
import { type SharedProps } from '@adonisjs/inertia/types'

// helper type for page components that automatically includes shared props
export type PageProps<T extends Record<string, any> = {}> = T & SharedProps

// re-export the properly typed shared props from Inertia module augmentation
export type { SharedProps }

// re-export common types from shared folder
export type { AuthData, User } from '../../../shared/types'
