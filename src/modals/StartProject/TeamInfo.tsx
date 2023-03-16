import CustomButton from "@/src/components/Form/CustomButton";
import FormErrorHandler from "@/src/components/Form/FormErrorHandler";
import FormSelect from "@/src/components/Form/FormSelect";
import {
  hiringNeed,
  programmingLanguages,
  teamList,
} from "@/src/utils/constants";
import { IFormProps } from "@/src/utils/interfaces";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { isEmpty } from "lodash";
import React from "react";

const TeamInfo: React.FC<IFormProps> = ({
  values,
  errors,
  touched,
  setFieldValue,
  setComponent,
  dirty,
  isHireTeam
}) => {



  const sizes = [
    {
      size: "0-3",
      selected: false,
    },
    {
      size: "4-10",
      selected: false,
    },
    {
      size: "11-20",
      selected: false,
    },
  ];

  const isInvalid = !!(errors?.projectDescription && touched);

  return (
    <VStack align="left" spacing={8} my={6}>
      <FormSelect
        onChange={(value: any) => setFieldValue("teamMembers", value)}
        value={values.teamMembers}
        options={teamList}
        isMulti={true}
        isSearchable={true}
        label="Select Team Members"
        name="teamMembers"
        id="teamMembers"
        error={errors?.teamMembers as string}
      />
      <FormSelect
        onChange={(value: any) => setFieldValue("skills", value)}
        value={values.skills}
        options={programmingLanguages}
        isMulti={true}
        isSearchable={true}
        label="Select Skills"
        name="skills"
        id="skills"
        error={errors?.skills as string}
      />

      {
        isHireTeam && (
          <FormSelect
          onChange={(value: any) => setFieldValue("hiringNeed", value)}
          value={values.hiringNeed}
          options={hiringNeed}
          isMulti={false}
          isSearchable={false}
          label="Hiring Need"
          name="hiringNeed"
          id="hiringNeed"
          // @ts-ignore
          error={errors?.hiringNeed?.value as string}
        />
        )
      }
   

      <FormControl isInvalid={isInvalid}>
        <FormLabel>Current Team Counts</FormLabel>
        <HStack>
          {sizes?.map((size) => (
            <Button
              key={size.size}
              value={size?.size}
              rounded="3xl"
              onClick={() => setFieldValue("teamCount", size.size)}
              bg={values?.teamCount === size?.size ? "#4F4F4F" : "#F2F2F2"}
              color={
                values?.teamCount === size?.size ? "white" : "rgba(0, 0, 0, 1)"
              }
            >
              {size?.size}
            </Button>
          ))}
        </HStack>
        <Box mb={4}>
        <FormErrorHandler error={errors?.teamCount as string} />
      </Box>
      </FormControl>
    <Box mt={10}>
    <CustomButton
        title="Continue"
        onClick={() => setComponent(2)}
        width="100%"
        isDisabled={!isEmpty(errors) || !dirty}
      />
    </Box>
    </VStack>
  );
};

export default TeamInfo;
