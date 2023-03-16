export interface CustomFile extends File {
  preview: string;
  formattedSize: string;
  fileType: string;
}

export interface IProject {
  subject?: string;
  email?: string;
  fullName?: string;
  company?: string;
  phoneNumber?: string;
  teamMembers?: string[];
  skills?: string[];
  hiringNeed?: {
    label: string;
    value: string;
  };
  teamCount?: string;
  devices?: {
    desktop?: boolean;
    mobile?: boolean;
    others?: boolean;
  };
  projectName?: string;
  projectDescription?: string;
  hireTeam?: boolean;
  documents?: CustomFile | string;
}

export interface IHelp {
  fullName?: string;
  email?: string;
  message: string;
  subject: string;
}

export interface IJob {
  subject: string;
  fullName: string;
  email: string;
  linkedInUrl: string;
  documents?: CustomFile | string;
  message: string;
}

export interface IFormProps {
  values: IProject;
  handleBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  errors: Record<string, unknown | Record<string, unknown>>;
  touched?: Record<string, unknown>;
  setFieldValue: (arg: string, value: unknown) => void;
  setFieldTouched?:
    | ((
        field: string,
        item?: boolean | undefined,
        shouldValidate?: boolean | undefined
      ) => any)
    | undefined;
  setComponent: (value: React.SetStateAction<number>) => void;
  active?: boolean;
  isSubmitting?: boolean;
  isValid?: boolean;
  dirty?: any;
  isHireTeam?: boolean;
}

export interface IFormInput {
  id: string;
  name: string;
  type?: string;
  label: string;
  required: boolean;
  placeholder?: string;
  error?: string;
  setFieldValue?: (arg: string, value: unknown) => void;
  handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  [x: string]: unknown;
}
