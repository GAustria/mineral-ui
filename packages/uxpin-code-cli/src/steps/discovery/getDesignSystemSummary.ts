import safe = require('colors/safe');
import { ComponentDefinition } from '../serialization/component/ComponentDefinition';

export function getDesignSystemSummary(components:ComponentDefinition[]):string {
  return components.map((component) => `${safe.bold(component.name)}
    📜 documentation: ${booleanToCheckmark(!!component.documentation)}
    💡 examples: ${booleanToCheckmark(component.examples.length > 0)}
`).join('\n');
}

function booleanToCheckmark(value:boolean):string {
  if (value) {
    return safe.green('✔');
  }
  return safe.red('✘');
}