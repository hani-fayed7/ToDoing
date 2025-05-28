export const createTodoValidatorSchema = {
    title:{
        notEmpty: true,
        errorMessage: 'Title is required'
    },
    created_by: {
        notEmpty: true,
        isString: true,
        errorMessage: 'Created by is required and must be a string'
    }
}