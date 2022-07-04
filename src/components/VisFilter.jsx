import { Container, Tabs, TabList, Tab, TabPanels, TabPanel, Progress } from "@chakra-ui/react";
import { useState } from "react";
import CompletedTodos from "./CompletedTodos";
import InCompletedTodos from "./Incomplete";

const VisFilter = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container centerContent>
      <Tabs variant='soft-rounded' onChange={(index) => setTabIndex(index)} >
        <TabList>
          <Tab _selected={{ color: 'black', bg: 'blue.100' }}>All</Tab>
          <Tab _selected={{ color: 'black', bg: 'green.100' }}>Completed</Tab>
          <Tab _selected={{ color: 'black', bg: 'red.100' }}>Incomplete</Tab>
        </TabList>
        <TabPanels p='2rem'>
          <TabPanel><CompletedTodos /></TabPanel>
          <TabPanel><CompletedTodos /></TabPanel>
          <TabPanel><InCompletedTodos /></TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default VisFilter;