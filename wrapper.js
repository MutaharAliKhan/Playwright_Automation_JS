export function withErrorHandling(fnName = 'Action') {
    return function (target, key, descriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = async function (...args) {
        try {
          console.log(`[${fnName}] Running: ${key}`);
          return await originalMethod.apply(this, args);
        } catch (error) {
          console.error(`[${fnName}] Error in: ${key} - ${error.message}`);
          if (this.captureScreenshot) await this.captureScreenshot(`${key}_error`);
          throw new Error(`[${fnName}] ${key} failed: ${error.message}`);
        }
      };
      return descriptor;
    };
  }
  