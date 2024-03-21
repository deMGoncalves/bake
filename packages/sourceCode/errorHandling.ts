import type SourceCode from "./sourceCode";

function errorHandling(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value

  Object.assign(descriptor, {
    value () {
      if (this.done) {
        throw new Error('Source code has reached the end.');
      }

      return Reflect.apply(method, this, [])
    }
  })

  return descriptor
}

export default errorHandling
