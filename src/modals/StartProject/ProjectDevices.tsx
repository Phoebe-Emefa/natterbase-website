import CustomButton from "@/src/components/Form/CustomButton";
import FormErrorHandler from "@/src/components/Form/FormErrorHandler";
import { projectDevices } from "@/src/utils/constants";
import { IFormProps } from "@/src/utils/interfaces";
import {
  ComponentWithAs,
  IconProps,
  Box,
  Grid,
  FormControl,
} from "@chakra-ui/react";
import { isEmpty } from "lodash";
import React, { useState } from "react";
import DeviceCard from "./DeviceCard";

const ProjectDevices: React.FC<IFormProps> = ({
  errors,
  touched,
  setFieldValue,
  setComponent,
  dirty,
}) => {
  const [selected, setSelected] = useState<Record<string, boolean>>(
    projectDevices.reduce((acc, curr) => {
      acc[curr?.title?.toLowerCase() as keyof typeof acc] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const dataMap = projectDevices.reduce(
    (acc, curr) => {
      acc[curr?.title?.toLowerCase() as keyof typeof acc] = curr;
      return acc;
    },
    {} as Record<
      string,
      {
        icon: ComponentWithAs<"svg", IconProps>;
        title: string;
      }
    >
  );

  const isInvalid = !!(errors?.devices && touched);

  return (
    <Box>
      <FormControl isInvalid={isInvalid} id="devices">
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }}
          gap={5}
          my={6}
          width="100%"
        >
          {Object.keys(selected)?.map((device) => (
            <DeviceCard
              key={dataMap[device]?.title}
              title={dataMap[device]?.title}
              icon={dataMap[device]?.icon}
              active={!!selected?.[device] as boolean}
              onClick={() => {
                const obj = { ...selected };
                if (obj[device]) {
                  obj[device] = false;
                } else {
                  obj[device] = true;
                }
                setSelected(obj);
                setFieldValue("devices", obj);
              }}
            />
          ))}
        </Grid>
        <Box mb={4}>
          <FormErrorHandler error={errors?.devices as string} />
        </Box>
      </FormControl>
      <Box mt={10}>
        <CustomButton
          title="Continue"
          onClick={() => setComponent(3)}
          isDisabled={!isEmpty(errors) || !dirty}
          width="100%"
        />
      </Box>
    </Box>
  );
};

export default ProjectDevices;
