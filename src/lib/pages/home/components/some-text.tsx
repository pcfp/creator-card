import { Grid, Heading, Text } from '@chakra-ui/react';

export const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="2xl" fontWeight="bold">
        Creator Card
      </Heading>

      <Text fontSize="xs">
      Credit Card Designed For Creators
      </Text>
    </Grid>
  );
};
