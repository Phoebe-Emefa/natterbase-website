import React from "react";
import {
  Flex,
  LayoutProps,
  ChakraProps,
  Input,
  Button,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/react";
import { DropzoneProps, useDropzone } from "react-dropzone";
import { getFileType, humanFileSize } from "@/src/utils/misc";
import { CustomFile } from "@/src/utils/interfaces";
import FormErrorHandler from "./FormErrorHandler";

interface IFileUpload extends DropzoneProps {
  value: CustomFile | string | string | undefined;
  error: string | undefined;
  setFieldValue: (e: string, v: File) => void;
  setFieldTouched: (e: string, v: boolean) => void;
  name: string;
  touched: boolean;
  accepts?: string;
  isDisabled?: boolean;
  multiple?: boolean;
  instruction?: string;
  title?: string;
  height?: LayoutProps["h"];
  callback?: () => void;
  isLoading?: boolean;
  label?: string
}

function FileUpload({
  setFieldTouched,
  setFieldValue,
  isDisabled,
  value,
  name,
  callback,
  label,
  error
}: IFileUpload & { flexDirection?: ChakraProps["flexDirection"] }) {
  const processFile = (fileData: File[]) => {
    const newFile = fileData.map((file: File) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: humanFileSize(file.size),
        fileType: getFileType(file.type),
      })
    );
    setFieldValue(name, newFile[0]);
    if (callback) {
      callback();
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      processFile(acceptedFiles);
    },
    onFileDialogOpen: () => {
      setFieldTouched(name, true);
    },
    disabled: isDisabled,
    multiple: false,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <FormControl>
        <FormLabel>{label} </FormLabel>
        <Input
          variant="flushed"
          focusBorderColor="primary"
          borderColor="#BDBDBD"
          value={(value as CustomFile)?.name}
        />
          <Flex mt={-14} justify="flex-end">
        <Button
          bg="black"
          color="white"
          fontWeight={500}
          rounded="none"
          height={12}
          px={10}
          _hover={{ hover: "none" }}
        >
          Upload
        </Button>
      </Flex>
      <Box mb={4}>
        <FormErrorHandler error={error as string} />
      </Box>
      </FormControl>

    
    </div>
  );
}

export default FileUpload;
