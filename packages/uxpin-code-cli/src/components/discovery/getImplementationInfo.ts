import pAny = require('p-any');
import { ComponentImplementationInfo } from '../ComponentInfo';
import { getJSImplementationInfo } from './implementation/strategies/getJSImplementationInfo';
import { getTSImplementationInfo } from './implementation/strategies/getTSImplementationInfo';

type ImplementationDiscoveryStrategy = (dirPath:string, fileName:string) => Promise<ComponentImplementationInfo>;

const STRATEGIES:ImplementationDiscoveryStrategy[] = [
  getTSImplementationInfo,
  getJSImplementationInfo,
];

export function getImplementationInfo(dirPath:string, fileName:string):Promise<ComponentImplementationInfo> {
  return pAny(STRATEGIES.map((strategy) => strategy(dirPath, fileName)));
}
