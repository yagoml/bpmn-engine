// The engine. Executes passed BPMN 2.0 definitions.
// https://github.com/paed01/bpmn-engine/blob/master/docs/API.md#engine

const {Engine} = require('bpmn-engine')
const fs = require('fs')

// Creates a new Engine.
const engine = Engine({
  name: 'mother of all',
  source: fs.readFileSync('./diagrams/example-diagram.bpmn'),
  moddleOptions: {
    camunda: require('camunda-bpmn-moddle/resources/camunda')
  }
})

// Execute definition
engine.execute((err, execution) => {
  if (err) throw err
  console.log('Execution environment: ', execution.environment)
})