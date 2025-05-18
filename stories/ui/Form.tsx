import React from "react";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Form as UIForm,
	useFormField,
} from "../../app/components/ui/form";

// Re-export all parts of Form for stories
export {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	useFormField,
};

// Just a simple passthrough as FormProvider is already a passthrough
export const Form = UIForm;
