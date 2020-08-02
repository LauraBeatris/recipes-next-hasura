import { useCallback } from "react";
import { ObjectSchema } from "yup";

const useYupValidationResolver = (validationSchema: ObjectSchema): void => {
  useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {},
          ),
        };
      }
    },
    [validationSchema],
  );
};

export default useYupValidationResolver;
