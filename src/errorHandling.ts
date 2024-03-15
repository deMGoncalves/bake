function errorHandling(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value

  Object.assign(descriptor, {
    value () {
      if (this.done) {
        throw new Error('Source code has reached the end.');
      }

      return Reflect.apply(originalMethod, this, [])
    }
  })

  return descriptor
}

export default errorHandling
