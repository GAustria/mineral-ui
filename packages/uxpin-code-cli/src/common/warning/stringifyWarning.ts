import cleanStacktrace = require('clean-stacktrace');
import cleanStacktraceRelativePaths = require('clean-stacktrace-relative-paths');
import safe = require('colors/safe');
import { WarningDetails } from './WarningDetails';

export function stringifyWarning(warning:WarningDetails, includeError:boolean = false):string {
  const { message, sourcePath, originalError } = warning;
  let result:string = safe.yellow('warning ') + message + ' in:\n';
  if (sourcePath) {
    result += safe.blue(sourcePath) + '\n';
  }
  if (includeError && originalError) {
    if (originalError.stack) {
      result += cleanStacktrace(originalError.stack, cleanStacktraceRelativePaths()) + '\n';
    } else {
      result += originalError + '\n';
    }
  }
  return result;
}
