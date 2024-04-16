import SourceCode from './sourceCode'

function checkBounds (_target: any, _propertyKey: PropertyKey, descriptor: PropertyDescriptor) {
  const method = descriptor.value

  Object.assign(descriptor, {
    value (this: SourceCode) {
      if (this.notDone) {
        return Reflect.apply(method, this, arguments)
      }

      throw new Error('Source code has reached the end.')
    }
  })

  return descriptor
}

export default checkBounds
