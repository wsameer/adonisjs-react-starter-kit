import vine from '@vinejs/vine'

export const userSchema = vine.object({
  name: vine.string().minLength(3).maxLength(50),
  email: vine.string().trim().email().unique({ table: 'users', column: 'email' }),
  password: vine.string().minLength(6).maxLength(32),
})

/**
 * Validator to validate the payload when creating
 * a new user.
 */
export const createUserValidator = vine.compile(userSchema)

/**
 * Validator to validate the payload when updating
 * an existing user.
 */
export const updateUserValidator = vine.compile(userSchema)
