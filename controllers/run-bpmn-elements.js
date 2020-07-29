// Isomorphic JavaScript BPMN 2.0 workflow elements suitable for bundling into frontend script or just required into your nodejs project.

// https://github.com/paed01/bpmn-elements

const elements = require('bpmn-elements')
const BpmnModdle = require('bpmn-moddle')
const serialize = require('moddle-context-serializer').default
const TypeResolver = require('moddle-context-serializer').TypeResolver

const {Context, Definition} = elements
const typeResolver = TypeResolver(elements)

const diagram = require('../diagrams/diagram')

async function run() {
  const moddleContext = await getModdleContext(diagram)
  const options = {
    Logger,
    services: {
      myService(arg, next) {
        next()
      },
    },
  }
  const context = Context(serialize(moddleContext, typeResolver))

  const definition = Definition(context, options)
  definition.run()
}

function getModdleContext(sourceXml) {
  const bpmnModdle = new BpmnModdle()
  return bpmnModdle.fromXML(sourceXml.trim())
}

function Logger(scope) {
  return {
    debug: console.debug.bind(console, scope),
    error: console.error.bind(console, scope),
    warn: console.warn.bind(console, scope)
  }
}

module.exports = run