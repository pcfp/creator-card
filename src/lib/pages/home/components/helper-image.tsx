import { Tooltip, Image } from '@chakra-ui/react';

type HelperImageProps = {
  label?: string;
  src: string;
};

const size = 5;

export const HelperImage = ({ label = '', src }: HelperImageProps) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Image src={src} alt={label} title={label} height={size} width={size} />
      </Tooltip.Trigger>
      <Tooltip.Content>
        {label}
      </Tooltip.Content>
    </Tooltip.Root>
  );
};
