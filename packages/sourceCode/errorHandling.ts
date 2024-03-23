import SourceCode from './sourceCode'

function errorHandling(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value

  Object.assign(descriptor, {
    value () {
      if (((this as unknown) as SourceCode).notDone) {
        return Reflect.apply(method, this, [])
      }

      throw new Error('Source code has reached the end.')
    }
  })

  return descriptor
}

export default errorHandling
