const diagram = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_0poxro5" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="4.1.1">
  <bpmn:process id="Process_0ieg8m6" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1" name="Submissão de edital">
      <bpmn:outgoing>Flow_0m7wkre</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:endEvent id="Event_1myjgvs" name="Edital submetido">
      <bpmn:incoming>Flow_166gqvg</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_0m7wkre" sourceRef="StartEvent_1" targetRef="Activity_0mr4zf9" />
    <bpmn:sequenceFlow id="Flow_13mqstm" sourceRef="Activity_0mr4zf9" targetRef="Activity_1beqjdu" />
    <bpmn:sequenceFlow id="Flow_166gqvg" sourceRef="Activity_1beqjdu" targetRef="Event_1myjgvs" />
    <bpmn:serviceTask id="Activity_0mr4zf9" name="Salvar edital" implementation="\${environment.services.myService}">
      <bpmn:incoming>Flow_0m7wkre</bpmn:incoming>
      <bpmn:outgoing>Flow_13mqstm</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:userTask id="Activity_1beqjdu" name="Enviar email">
      <bpmn:incoming>Flow_13mqstm</bpmn:incoming>
      <bpmn:outgoing>Flow_166gqvg</bpmn:outgoing>
    </bpmn:userTask>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_0ieg8m6">
      <bpmndi:BPMNEdge id="Flow_0m7wkre_di" bpmnElement="Flow_0m7wkre">
        <di:waypoint x="215" y="117" />
        <di:waypoint x="320" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_13mqstm_di" bpmnElement="Flow_13mqstm">
        <di:waypoint x="420" y="117" />
        <di:waypoint x="510" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_166gqvg_di" bpmnElement="Flow_166gqvg">
        <di:waypoint x="610" y="117" />
        <di:waypoint x="702" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="179" y="99" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="162" y="142" width="70" height="27" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1myjgvs_di" bpmnElement="Event_1myjgvs">
        <dc:Bounds x="702" y="99" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="679" y="142" width="82" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_12gxhec_di" bpmnElement="Activity_0mr4zf9">
        <dc:Bounds x="320" y="77" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_080me74_di" bpmnElement="Activity_1beqjdu">
        <dc:Bounds x="510" y="77" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`

module.exports = diagram