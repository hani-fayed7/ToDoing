// Regex for at least one of the listed special characters
const specialCharRegex = /[~`!@#$%^&*()\-_=+{}\[\]|\\;:"<>,./?]/;

export const createUserValidatorSchema = {
  email: {
    notEmpty: {
      errorMessage: 'Email is required',
    },
    matches: {
      options: /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/, // Regex for basic email validation
      errorMessage: 'Invalid email format',
    }
  },

  password: {
    notEmpty: {
      errorMessage: 'Password is required',
    },
    isLength: {
      options: { min: 6 },
      errorMessage: 'Password must be at least 6 characters long',
    },
    custom: {
      options: (value) => {
        if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value) || !specialCharRegex.test(value)){
            throw new Error('Password must contain uppercase, lowercase, number, and special character')
        }
        return true
      }
    }
  }
}