import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  IconButton,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stat,
  StatHelpText,
  StatLabel,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { GraphContext } from "../Contexts";

const Header = (props) => {
  const { displayedNode } = props;
  const { getNode, aprobar, ponerEnFinal } = React.useContext(GraphContext);
  const [nota, setNota] = React.useState(getNode(displayedNode)?.nota || 7);

  return (
    <Flex alignItems="center">
      <Stat
        mx={3}
        color="white"
        css={{ "& *": { marginTop: 0, marginBottom: 0 } }}
        size="sm"
      >
        <StatLabel>[{getNode(displayedNode)?.id}]</StatLabel>
        <StatHelpText>
          <Text maxWidth="20ch" isTruncated>
            {getNode(displayedNode)?.materia}
          </Text>
        </StatHelpText>
      </Stat>
      <Popover autoFocus placement="bottom-start">
        <PopoverTrigger>
          <Box>
            <Tooltip closeOnClick={true} hasArrow label="Aprobar">
              <IconButton size="sm" colorScheme="green" icon={<CheckIcon />} />
            </Tooltip>
          </Box>
        </PopoverTrigger>
        <PopoverContent w="fit-content" borderColor="black">
          <PopoverArrow />
          <PopoverBody>
            <Flex>
              <Box justifySelf="flex-end">
                <NumberInput
                  focusBorderColor="green.600"
                  inputMode="numeric"
                  onChange={(_, nota) => {
                    setNota(nota);
                    aprobar(displayedNode, nota);
                  }}
                  value={nota}
                  min={4}
                  mx={5}
                  max={10}
                >
                  <NumberInputField w="4ch" />
                  <NumberInputStepper w="2ch">
                    <NumberIncrementStepper color="black" />
                    <NumberDecrementStepper color="black" />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Tooltip hasArrow label="Poner en Final">
        <Button
          mx={3}
          size="sm"
          onClick={() => ponerEnFinal(displayedNode)}
          colorScheme="yellow"
        >
          F
        </Button>
      </Tooltip>
    </Flex>
  );
};

export default Header;
