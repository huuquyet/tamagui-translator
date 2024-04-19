import { Paragraph, Progress, YStack } from 'tamagui'

export const MyProgress = ({ text, percentage }: { text: string; percentage: number }) => {
  percentage = percentage ?? 0
  return (
    <YStack h="$8" ai="center" gap="$4">
      <Paragraph h={30} o={0.5}>
        {text} {/* ({`${percentage.toFixed(2)}%`}) */}
      </Paragraph>
      {percentage !== 100 && (
        <Progress size="$6" value={percentage}>
          <Progress.Indicator animation="bouncy" />
        </Progress>
      )}
    </YStack>
  )
}