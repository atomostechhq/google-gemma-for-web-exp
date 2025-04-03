import {FilesetResolver, LlmInference} from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai';
import {updateOutputWithMarkdown} from './markdown-handler.js';

const input = document.getElementById('input');
const output = document.getElementById('output');
const submit = document.getElementById('submit');

const modelFileName = './assets/gemma-2b-it-gpu-int8.bin'; 

let currentOutput = '';

function displayPartialResults(partialResults, complete) {
  currentOutput += partialResults;
  updateOutputWithMarkdown(output, currentOutput);

  if (complete) {
    if (!currentOutput) {
      updateOutputWithMarkdown(output, 'Result is empty');
    }
    submit.disabled = false;
    submit.classList.remove('loading');
  }
}

async function runDemo() {
    console.log('Loading the model...');
  const genaiFileset = await FilesetResolver.forGenAiTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai@latest/wasm');
  let llmInference;

  submit.onclick = () => {
    currentOutput = '';
    output.innerHTML = '';
    submit.disabled = true;
    submit.classList.add('loading');
    llmInference.generateResponse(input.value, displayPartialResults);
  };

  submit.value = 'Loading the model...'
  LlmInference
      .createFromOptions(genaiFileset, {
        baseOptions: {modelAssetPath: modelFileName},
        // maxTokens: 512,  // The maximum number of tokens (input tokens + output
        //                  // tokens) the model handles.
        // randomSeed: 1,   // The random seed used during text generation.
        // topK: 1,  // The number of tokens the model considers at each step of
        //           // generation. Limits predictions to the top k most-probable
        //           // tokens. Setting randomSeed is required for this to make
        //           // effects.
        // temperature:
        //     1.0,  // The amount of randomness introduced during generation.
        //           // Setting randomSeed is required for this to make effects.
      })
      .then(llm => {
        llmInference = llm;
        submit.disabled = false;
        submit.value = 'Get Response'
      })
      .catch(() => {
        alert('Failed to initialize the task.');
      });
}

runDemo();