import { useRef } from 'react'

import { Text, Group, Button, createStyles } from '@mantine/core'
import { Dropzone as MantineDropzone, MIME_TYPES } from '@mantine/dropzone'
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    marginBottom: 30,
  },

  dropzone: {
    borderWidth: 1,
    paddingBottom: 50,
  },

  icon: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  control: {
    position: 'absolute',
    width: 250,
    left: 'calc(50% - 125px)',
    bottom: -20,
  },
}))

const Dropzone = () => {
  const { classes, theme } = useStyles()
  const openRef = useRef<() => void>(null)

  return (
    <div className={classes.wrapper}>
      <MantineDropzone
        openRef={openRef}
        onDrop={() => {}}
        className={classes.dropzone}
        radius="md"
        accept={[MIME_TYPES.pdf]}
        maxSize={30 * 1024 ** 2}
      >
        <div style={{ pointerEvents: 'none' }}>
          <Group position="center">
            <MantineDropzone.Accept>
              <IconDownload
                size={50}
                color={theme.colors[theme.primaryColor][6]}
                stroke={1.5}
              />
            </MantineDropzone.Accept>
            <MantineDropzone.Reject>
              <IconX size={50} color={theme.colors.red[6]} stroke={1.5} />
            </MantineDropzone.Reject>
            <MantineDropzone.Idle>
              <IconCloudUpload
                size={50}
                color={
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[0]
                    : theme.black
                }
                stroke={1.5}
              />
            </MantineDropzone.Idle>
          </Group>

          <Text align="center" weight={700} size="lg" mt="xl">
            <MantineDropzone.Accept>Drop files here</MantineDropzone.Accept>
            <MantineDropzone.Reject>
              Pdf file less than 30mb
            </MantineDropzone.Reject>
            <MantineDropzone.Idle>Upload resume</MantineDropzone.Idle>
          </Text>
          <Text align="center" size="sm" mt="xs" color="dimmed">
            Drag&apos;n&apos;drop files here to upload. We can accept only{' '}
            <i>.pdf</i> files that are less than 30mb in size.
          </Text>
        </div>
      </MantineDropzone>

      <Button
        variant="filled"
        className={classes.control}
        size="md"
        radius="xl"
        onClick={() => openRef.current?.()}
      >
        Select files
      </Button>
    </div>
  )
}

export default Dropzone
