import { useState } from 'react'

import { Textarea, TextInput, Button, Text } from '@mantine/core'

import { MetaTags } from '@redwoodjs/web'

async function query(data) {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/deepset/roberta-base-squad2',
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
      },
      method: 'POST',
      body: JSON.stringify(data),
    }
  )
  const result = await response.json()
  return result
}

const RobertaBaseSquad2Page = () => {
  const [contextValue, setContextValue] = useState(
    'My name is Clara and I live in Berkeley.'
  )
  const [questionValue, setQuestionValue] = useState("What's my name?")
  const [answerValue, setAnswerValue] = useState('')

  return (
    <>
      <MetaTags
        title="RobertaBaseSquad2"
        description="RobertaBaseSquad2 page"
      />
      <h1>Question Answering</h1>
      <p>
        This is the roberta-base model, fine-tuned using the SQuAD2.0 dataset.
        It&apos;s been trained on question-answer pairs, including unanswerable
        questions, for the task of Question Answering.
      </p>
      <Textarea
        mt={20}
        placeholder="Context"
        label="Context"
        radius="lg"
        withAsterisk
        autosize
        minRows={4}
        value={contextValue}
        onChange={(event) => setContextValue(event.currentTarget.value)}
      />
      <TextInput
        mt={5}
        placeholder="Your question"
        label="Question"
        radius="md"
        withAsterisk
        value={questionValue}
        onChange={(event) => setQuestionValue(event.currentTarget.value)}
      />
      <Button
        mt={20}
        variant="outline"
        onClick={() =>
          query({
            inputs: {
              question: questionValue,
              context: contextValue,
            },
          }).then((response) => {
            setAnswerValue(JSON.stringify(response))
          })
        }
      >
        Answer
      </Button>
      <Text mt={20}>{answerValue}</Text>
    </>
  )
}

export default RobertaBaseSquad2Page
